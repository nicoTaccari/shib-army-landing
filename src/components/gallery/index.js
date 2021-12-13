import React from "react";

// eslint-disable-next-line
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// eslint-disable-next-line
import "swiper/swiper-bundle.css";
import "../../App.css";
import "./styles.css";
import Logo from "../../assets/images/logo512.png";
// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

export default function Gallery() {
  return (
    <section>
      <Swiper
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
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="shiba" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
