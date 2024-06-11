import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Styles from "./Tesimonial.module.css";

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";

function Testimonial() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2} // Show more slides at once
              spaceBetween={30} // Space between slides
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              responsive={[
                {
                  breakpoint: 1024,
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  infinite: true,
                  dots: true,
                },
                {
                  breakpoint: 600,
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  initialSlide: 1,
                },
                {
                  breakpoint: 480,
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              ]}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 90,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <section className={Styles.testimonial_container}>
                    <p className={Styles.testimonial}>
                      <FaQuoteLeft />
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quia repellendus, vitae suscipit culpa molestiae possimus
                      voluptate consequuntur
                      <FaQuoteRight />
                    </p>
                    <div className={Styles.user}>
                      <img
                        src="https://randomuser.me/api/portraits/women/46.jpg"
                        alt="user"
                        className={Styles.user_image}
                      />
                      <div className={Styles.user_details}>
                        <h4 className={Styles.username}>Arya Stark</h4>
                        <p className={Styles.role}>Marketing</p>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Testimonial;