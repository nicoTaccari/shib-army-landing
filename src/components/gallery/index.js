import React from "react";

// eslint-disable-next-line
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// eslint-disable-next-line
import "swiper/swiper-bundle.css";
import "../../App.css";
import "./styles.css";
import One from "../../assets/images/gallery/1.png";
import Two from "../../assets/images/gallery/2.png";
import Three from "../../assets/images/gallery/3.png";
import Four from "../../assets/images/gallery/4.png";
import Five from "../../assets/images/gallery/5.png";
import Six from "../../assets/images/gallery/6.png";
import Seven from "../../assets/images/gallery/7.png";
// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

export default function Gallery() {
  return (
    <section className="swiper-container">
      <h2>OUR SHIBA WARRIORS</h2>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={One} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Two} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Three} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Four} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Five} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Six} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Seven} alt="shiba" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
