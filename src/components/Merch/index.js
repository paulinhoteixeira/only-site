import MerchData from "../../Data/MerchData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";

import "swiper/swiper-bundle.css";
import "./style.css";

// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Pagination]);

const Merch = () => (
  <div className="merch container section" id="merch">
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
        breakpoints={{
          // width >= 767px
          767: {
            spaceBetween: 30,
            slidesPerView: 4,
          }}}
      >
        {MerchData.map((item) => {
          return (
            <SwiperSlide>
                <div className="image">
                <img className="tshirt" src={item.image} alt={item.tshirt} />
                </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </div>
);

export default Merch;
