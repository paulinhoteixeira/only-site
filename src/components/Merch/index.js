import MerchData from "../../Data/MerchData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";

import "swiper/swiper-bundle.css";
import "./style.css";

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Pagination]);

const Merch = () => (
  <div className="merch container">
    <h1>Merch Oficial</h1>
    <h2>Confira todos os nossos modelos de camiseta</h2>

    <div className="tshirts">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        navigation={true}
        mousewheel={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {MerchData.map((item) => {
          return (
            <SwiperSlide>
              <img className="ep" src={item.image} alt={item.tshirt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </div>
);

export default Merch;
