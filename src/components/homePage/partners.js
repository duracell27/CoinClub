import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Partners({ data }) {
  return (
    <div className="partners">
      <h2 className="partners__title">НАШИ ПАРТЕНРЫ</h2>
      <div className="swiper partners-slider">
        <div className="swiper-wrapper">
          <Swiper
            initialSlide={1}
            slidesPerView={4}
            loop={true}
            freeMode={true}
            centeredSlides={true}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide">
                  <a className="partners-slider__inner" href="">
                    <img
                      className="partners-slider__img partners-slider__img--1"
                      src={item.partnerLogo.sourceUrl}
                      alt=""
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
