import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

SwiperCore.use([Navigation])

export default function Applications({ data }) {
  return (
    <section className="download" id="download">
      <div className="main-container">
        <h2 className="download__title">{data.title}</h2>
        <div className="download__trambs-inner">
          <div className="swiper download-trambs" id="download-trambs">
            <div className="swiper-wrapper">
              <Swiper
                navigation={{
                  nextEl: "#download-trambs-next",
                  prevEl: "#download-trambs-prev",
                }}
                breakpoints={{
                  367: { slidesPerView: 3 },
                  767: { slidesPerView: 5 },
                }}
                initialSlide={1}
                slidesPerView="auto"
                loop={true}
                allowTouchMove={false}
                preventInteractionOnTransition={true}
                loopFillGroupWithBlank={true}
                centeredSlides={true}
                className="download-trambs"
              >
                {data.applicationsList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div className="download-trambs__inner">
                        <img
                          className="download-trambs__img"
                          src={item.icon.sourceUrl}
                          alt=""
                          width="61"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            className="download-trambs__arrow download-trambs__arrow--prev"
            id="download-trambs-prev"
          >
            <svg className="icon icon--angle-left">
              <use href="img/sprite.svg#angle-left"></use>
            </svg>
          </div>
          <div
            className="download-trambs__arrow download-trambs__arrow--next"
            id="download-trambs-next"
          >
            <svg className="icon icon--angle-right">
              <use href="img/sprite.svg#angle-right"></use>
            </svg>
          </div>
        </div>
      </div>

      <div className="swiper download-slider">
        <div className="swiper-wrapper">
          <Swiper
            navigation={{
              nextEl: "#download-trambs-next",
              prevEl: "#download-trambs-prev",
            }}
            loopAdditionalSlides={30}
            allowTouchMove={false}
            loop={true}
            centeredSlides={true}
            className={"download-slider"}
          >
            {data.applicationsList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide">
                  <div className="download-slider__inner">
                    <div className="download-slider__cont">
                      <div className="download-slider__img-w">
                        <img
                          className="download-slider__img"
                          src={item.bigIcon.sourceUrl}
                          alt=""
                        />
                      </div>
                      <div className="download-slider__text">
                        <img
                          className="download-slider__title-logo"
                          src={item.image2.sourceUrl}
                          alt=""
                          width="330"
                        />
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="download-slider__footer">
                      <ul className="download-app">
                        <li className="download-app__item">
                          <a href={item.googlePlay}>
                            <img
                              className="download-app__img"
                              src="img/google-play.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="download-app__item">
                          <a href={item.appStore}>
                            <img
                              className="download-app__img"
                              src="img/app-store.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
