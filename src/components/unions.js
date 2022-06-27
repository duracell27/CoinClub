import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useStaticQuery, graphql } from 'gatsby';

const UnionSlide = ({ title, id, country, union, rakeback, img }) => (
  <div className="swiper-slide">
    <div className="u-club-slider__inner">
      <h3 className="u-club-slider__title">{title}</h3>
      <div className="u-club-slider__id">ID {id}</div>
      <div className="u-club-slider__img-w">
        <img className="u-club-slider__img" src={img} alt="" />
      </div>
      <div className="u-club-slider__cont">
        <div className="u-club-slider__cont-inner">
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
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export function Unions() {
  const data = useStaticQuery(graphql`
    {
      allWpUnion {
        nodes {
          unionFields {
            unionId
            unionImage {
              sourceUrl
            }
            info {
              union
              rakenack
              fieldGroupName
              country
            }
          }
        }
      }
    }
  `);

  return (
    <section className="union" id="union">
      <div className="main-container">
        <h2 className="union__title">НАШИ СОЮЗЫ</h2>
      </div>
      <div className="swiper u-club-slider u-club-slider--union">
        <div className="swiper-wrapper">
          <Swiper
            breakpoints={{
              1194: { slidesPerView: 4 }
            }}
            initialSlide={1}
            slidesPerView="auto"
            loopAdditionalSlides={30}
            loop={true}
            centeredSlides={true}
            className="mySwiper"
            observer
            observeParents
          >
            {data.allWpUnion.nodes.map((item, index) => (
              <SwiperSlide key={index}>
                <UnionSlide
                  title={item?.title}
                  id={item?.unionFields?.unionId}
                  country={item?.unionFields.info?.country}
                  union={item?.unionFields.info?.union}
                  rakeback={item?.unionFields.info?.rakenack}
                  img={item?.unionFields?.unionImage?.sourceUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
