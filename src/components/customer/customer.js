import React from 'react'
import { swiperInfo } from '../../constant';
import Carousel from '../carousel/carousel'
import classes from '../customer/customer.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Customer = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.customer}>

          <h1>
            Powering the growth of 100+ business & retailers in Indonesia.
          </h1>
          <p>Powering the growth of 100+ business & retailers in Indonesia.</p>

        </div>
        <div className={classes.carousel}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={classes.mySwiper}
          >
            {swiperInfo.map((item, i) => (
              <SwiperSlide>
                <Carousel {...item} key={i} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </>
  )
}

export default Customer