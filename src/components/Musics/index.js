import React from "react";
import MusicsData from "../../Data/MusicsData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";

import "swiper/swiper-bundle.css";

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Pagination]);

const Musics = () => (
  <div className="musics">
    <Swiper 
    direction={'horizontal'}
    slidesPerView={1}
    navigation={true} 
    mousewheel={true}
    pagination={{"clickable": true}} 
    className="mySwiper">
      {MusicsData.map((item) => {
        return (
          <SwiperSlide>
            <img className="ep" src={item.image} alt={item.ep} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);

export default Musics;
