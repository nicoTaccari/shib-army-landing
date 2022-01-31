import React from "react";

// eslint-disable-next-line
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "../../App.css";
import "./styles.css";
import One from "../../assets/images/gallery/1.webp";
import Two from "../../assets/images/gallery/2.webp";
import Three from "../../assets/images/gallery/3.webp";
import Four from "../../assets/images/gallery/4.webp";
import Five from "../../assets/images/gallery/5.webp";
import Six from "../../assets/images/gallery/6.webp";
import Seven from "../../assets/images/gallery/7.webp";
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
