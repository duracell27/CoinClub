import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { useStaticQuery, graphql, Link } from 'gatsby';
SwiperCore.use([Pagination, EffectCoverflow]);

export default function Tournaments() {
  const data = useStaticQuery(graphql`
    {
      allWpTournament {
        nodes {
          tournamentsFields {
            tournamentLink
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return (
    <section className="tournaments" id="tournaments">
      <div className="swiper-wrapper">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          initialSlide={1}
          loop={true}
          loopAdditionalSlides={30}
          spaceBetween={12}
          coverflowEffect={{
            rotate: 0,
            stretch: -55,
            depth: 130,
            modifier: 2,
            slideShadows: false
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.3
            },
            468: { slidesPerView: 2 }
          }}
        >
          {data.allWpTournament.nodes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <Link
                  className="tournaments-slider__inner"
                  to={item.tournamentsFields.tournamentLink}
                  target="_blank"
                >
                  <img
                    className="tournaments-slider__img"
                    src={item.featuredImage.node.sourceUrl}
                    alt=""
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
