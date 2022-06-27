import React, { useState } from 'react';
import Papa from 'papaparse';
// import AddToFavourites from './addToFavorites';

const TableData = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const [data, setData] = useState({});
  Papa.parse(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfWriFU7Z6ldxCNhoIhLJvZrbkUsarIl-uSmEcvtwW8xwtjc64LpmFjfHw4zfqrGhev80cgkSFUt3t/pub?output=csv',
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    }
  );
  const tournaments = Array.from(data);
  return (
    // <tbody key={data.name}>
    //   {tournaments.map((data, i) => (
    //     <div className="table-card" key={i}>
    //       <div className="accordion" onClick={() => toggle(i)}>
    //         <div className="wrapper">
    //           <div className="title-wrapper">
    //             <div className="name">{data.name}</div>
    //             <div className="type">{data.type}</div>
    //           </div>
    //           <div className="time-wrapper">
    //             <div className="time">{data.time}</div>
    //             <div className="date">{data.data}</div>
    //           </div>
    //         </div>
    //
    //         <div className={selected === i ? 'content show' : 'content'}>
    //           <div className="buy-in-usd">
    //             BUY-IN USD: <span>{data.buyUSD}</span>
    //           </div>
    //           <div className="gtd">
    //             GTD: <span>{data.gtd}</span>
    //           </div>
    //           <div className="clubId">
    //             CLUB ID: <span>{data.clubId}</span>
    //           </div>
    //           <div className="application">
    //             APPLICATION: <span>{data.application}</span>
    //           </div>
    //           <div className="lateRegistration">
    //             LATE REGISTRATION: <span>{data.lateRegistration}</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </tbody>

    <tbody key={data.name}>
      {tournaments.map((data, i) => (
        <div className="table-card" key={i}>
          <div className="accordion" onClick={() => toggle(i)}>
            <div className="wrapper">
              <div className="title-wrapper">
                <div className="name">{data.name}</div>
                <div className="type">{data.type}</div>
              </div>
              <div className="time-wrapper">
                <div className="time">{data.time}</div>
                <div className="date">{data.data}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </tbody>
  );
};
export default TableData;
