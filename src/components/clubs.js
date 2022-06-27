import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  useMemo
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useStaticQuery, graphql } from 'gatsby';

const ClubSlide = ({
  title,
  id,
  country,
  union,
  rakeback,
  price,
  img,
  countryImg,
  link,
  rbRakeback
}) => (
  <div className="swiper-slide">
    <div className="u-club-slider__inner">
      <h3 className="u-club-slider__title">{title}</h3>
      <div className="u-club-slider__id">ID {id}</div>
      <div className="u-club-slider__img-w">
        <img className="u-club-slider__img" src={img?.sourceUrl} alt="" />
      </div>
      <div className="u-club-slider__cont">
        <div className="u-club-slider__cont-inner">
          <div className="u-club-slider__cont-img-w">
            <img
              className="u-club-slider__cont-img"
              src={countryImg?.sourceUrl}
              alt=""
            />
          </div>
          <ul className="u-club-s-list">
            <li className="u-club-s-list__item">
              <div className="u-club-s-list__icon">
                <svg className="icon icon--flag">
                  <use href="img/sprite.svg#flag"></use>
                </svg>
              </div>
              <div className="u-club-s-list__label">Страна:</div>
              <div className="u-club-s-list__text-info">{country}</div>
            </li>
            <li className="u-club-s-list__item">
              <div className="u-club-s-list__icon">
                <svg className="icon icon--boxes">
                  <use href="img/sprite.svg#boxes"></use>
                </svg>
              </div>
              <div className="u-club-s-list__label">Союз:</div>
              <div className="u-club-s-list__text-info">{union}</div>
            </li>
            <li className="u-club-s-list__item">
              <div className="u-club-s-list__icon">
                <svg className="icon icon--coins">
                  <use href="img/sprite.svg#coins"></use>
                </svg>
              </div>
              <div className="u-club-s-list__label">Рейкбек:</div>
              <div className="u-club-s-list__text-info">{rakeback}</div>
            </li>
            <li className="u-club-s-list__item">
              <div className="u-club-s-list__icon">
                <svg
                  className="icon icon--coins"
                  width="65"
                  height="72"
                  viewBox="0 0 65 72"
                  fill="none"
                >
                  <path
                    d="M49.4688 62.2188L46.1875 53.5938H18.25L14.9688 62.4062C13.6875 65.8438 12.5938 68.1719 11.6875 69.3906C10.7812 70.5781 9.29688 71.1719 7.23438 71.1719C5.48438 71.1719 3.9375 70.5312 2.59375 69.25C1.25 67.9688 0.578125 66.5156 0.578125 64.8906C0.578125 63.9531 0.734375 62.9844 1.04688 61.9844C1.35938 60.9844 1.875 59.5938 2.59375 57.8125L20.1719 13.1875C20.6719 11.9062 21.2656 10.375 21.9531 8.59375C22.6719 6.78125 23.4219 5.28125 24.2031 4.09375C25.0156 2.90625 26.0625 1.95312 27.3438 1.23438C28.6562 0.484375 30.2656 0.109375 32.1719 0.109375C34.1094 0.109375 35.7188 0.484375 37 1.23438C38.3125 1.95312 39.3594 2.89062 40.1406 4.04688C40.9531 5.20312 41.625 6.45312 42.1562 7.79688C42.7188 9.10938 43.4219 10.875 44.2656 13.0938L62.2188 57.4375C63.625 60.8125 64.3281 63.2656 64.3281 64.7969C64.3281 66.3906 63.6562 67.8594 62.3125 69.2031C61 70.5156 59.4062 71.1719 57.5312 71.1719C56.4375 71.1719 55.5 70.9688 54.7188 70.5625C53.9375 70.1875 53.2812 69.6719 52.75 69.0156C52.2188 68.3281 51.6406 67.2969 51.0156 65.9219C50.4219 64.5156 49.9062 63.2812 49.4688 62.2188ZM21.9062 43.1406H42.4375L32.0781 14.7812L21.9062 43.1406Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="u-club-s-list__label">Рейкбек РБ Агентам:</div>
              <div className="u-club-s-list__text-info">{rbRakeback}</div>
            </li>
          </ul>
          <div className="u-club-slider__rate">{price}</div>
        </div>
        <div className="u-club-slider__btn-w">
          <a className="btn btn--yellow" target="_blank" href={link}>
            ВСТУПИТЬ
          </a>
        </div>
      </div>
    </div>
  </div>
);

export function Clubs() {
  const data = useStaticQuery(graphql`
    {
      allWpClub {
        nodes {
          categories {
            nodes {
              name
            }
          }
          title
          clubFields {
            clubId
            link
            clubImage {
              sourceUrl
            }
            countryImg {
              sourceUrl
            }
            info {
              union
              rakenack
              fieldGroupName
              course
              country
              rbRakeback
            }
          }
        }
      }
    }
  `);

  const [clubs, updateClubs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterValues, setFilterValues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      let buffer = [];
      data.allWpClub.nodes.map((item) => {
        item.categories.nodes.map((itemCat) => {
          if (!buffer.some((inc) => inc.name === itemCat.name)) {
            buffer.push(itemCat);
          }
        });
      });
      setCategories(buffer);
      updateClubs(data.allWpClub.nodes);
      setLoading(false);
    }, 100);
  }, []);

  const getFilteredList = () => {
    if (filterValues.length === 0) {
      return clubs;
    }

    return clubs.filter((item) =>
      filterValues.some((v) => v.name === item.categories.nodes[0]?.name)
    );
  };

  let filteredList = useMemo(getFilteredList, [filterValues, clubs]);

  const sliderRef = useRef(null);

  const handleFilter = (value) => {
    if (filterValues.filter((e) => e.name === value).length > 0) {
      let filteredArray = filterValues.filter((item) => item.name !== value);
      setFilterValues(filteredArray);
    } else {
      setFilterValues([...filterValues, { name: value }]);
    }
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="u-club" id="u-club">
      <div className="main-container">
        <h2 className="u-club__title">Вибери свой клуб</h2>
        <ul className="u-club-filter">
          {categories.map((item) => (
            <li className="u-club-filter__item">
              <label className="u-club-filter__inner">
                <input
                  className="u-club-filter__input"
                  type="checkbox"
                  onChange={() => handleFilter(item.name)}
                />
                <div className="u-club-filter__cont">
                  <div className="u-club-filter__cont-status"></div>
                  {item.name}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="u-club-slider-wrap">
        <div className="swiper u-club-slider">
          <div className="swiper-wrapper">
            {filteredList.length === 1 ? (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <ClubSlide
                  title={filteredList[0].title}
                  id={filteredList[0].clubFields.clubId}
                  country={filteredList[0].clubFields.info.country}
                  union={filteredList[0].clubFields.info.union}
                  rakeback={filteredList[0].clubFields.info.rakenack}
                  price={filteredList[0].clubFields.info.course}
                  img={filteredList[0].clubFields?.clubImage}
                  countryImg={filteredList[0].clubFields?.countryImg}
                  link={filteredList[0].clubFields?.link}
                  rbRakeback={filteredList[0].clubFields?.info?.rbRakeback}
                />
              </div>
            ) : (
              <Swiper
                breakpoints={{
                  1194: { slidesPerView: 4 }
                }}
                ref={sliderRef}
                initialSlide={2}
                slidesPerView="auto"
                loopAdditionalSlides={30}
                loop={true}
                centeredSlides={true}
                className="u-club-swiper"
                observer
                observeParents
              >
                {filteredList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ClubSlide
                      title={item.title}
                      id={item.clubFields.clubId}
                      country={item.clubFields.info.country}
                      union={item.clubFields.info.union}
                      rakeback={item.clubFields.info.rakenack}
                      price={item.clubFields.info.course}
                      img={item.clubFields?.clubImage}
                      countryImg={item.clubFields?.countryImg}
                      link={item.clubFields?.link}
                      rbRakeback={item.clubFields?.info?.rbRakeback}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>

        {filteredList.length > 1 && (
          <div className="swiper-button-prev" onClick={handlePrev}>
            <svg className="icon icon--angle-left">
              <use href="img/sprite.svg#angle-left"></use>
            </svg>
          </div>
        )}

        {filteredList.length > 1 && (
          <div className="swiper-button-next">
            <svg className="icon icon--angle-right" onClick={handleNext}>
              <use href="img/sprite.svg#angle-right"></use>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
