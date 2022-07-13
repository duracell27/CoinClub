import React, { useState, useEffect } from 'react';

const AddToFavourites = ({ id }) => {
  const [isActive, setActive] = useState(false);

  const toggleCell = () => {
    setActive(!isActive);
  }
  
  // work with localStorage
  

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('userLikedTournaments'))
    
    if (storageData?.likedTournaments.includes(id)) {
      setActive(true)
    }
  }, [])

  useEffect(() => {
    // console.log('toggle pressed')
    if(!isActive){
      const storageData = JSON.parse(localStorage.getItem('userLikedTournaments'))
      if (storageData?.likedTournaments.includes(id)) {
        const newLike = storageData.likedTournaments.filter((e)=> e !== id)
        storageData.likedTournaments = newLike
        localStorage.setItem('userLikedTournaments', JSON.stringify(storageData))
      }
    }
    if (isActive) {   
      // console.log('я виконалась id', id)
      if (localStorage.getItem('userLikedTournaments') === null) {  
        const userLikedTournaments = {
          userId: 12345678,
          likedTournaments: []
        }
        userLikedTournaments.likedTournaments.push(id)
        localStorage.setItem('userLikedTournaments', JSON.stringify(userLikedTournaments))
      }else{
        const storageData = JSON.parse(localStorage.getItem('userLikedTournaments'))
        if (!storageData?.likedTournaments.includes(id)) {
          storageData.likedTournaments.push(id)
          localStorage.setItem('userLikedTournaments', JSON.stringify(storageData))
        }
      }
    }
  },[isActive])
// END work with localStorage

  return (
    <div onClick={toggleCell} className="heart">
      <svg
        width="28"
        height="21"
        viewBox="0 0 28 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.92591 0C3.17478 0 0 3.31419 0 7.00295C0 10.4639 2.3134 13.4547 5.14188 15.8158C7.97035 18.1763 11.3462 19.9262 13.6622 20.9415C13.8427 21.0195 14.0563 21.0195 14.2367 20.9415C16.553 19.926 19.9287 18.1761 22.7571 15.8158C25.5856 13.4551 27.899 10.464 27.899 7.00295C27.899 3.31414 24.7242 0 19.9731 0C17.1722 0 15.3117 1.21335 13.9494 2.85332C12.5871 1.2133 10.7264 0 7.92568 0L7.92591 0Z"
          fill={isActive ? '#DEAD45' : '#979797'}
        />
      </svg>
    </div>
  );
};

export default AddToFavourites;
