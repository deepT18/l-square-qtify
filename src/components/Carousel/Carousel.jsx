// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// // import "swiper/css/bundle";
// import "swiper/css";
// // import "swiper/css/navigation";
// import { Navigation } from "swiper";
import CarouselLeftNavigation from "./carouselLeft/carouselLeft.jsx";
import CarouselRightNavigation from "./carouselRight/carouselRight.jsx";
// // import Card from "../Card/Card.jsx";
import styles from "./carousel.module.css";

// const Controls = ({ datas }) => {
//   const swiper = useSwiper();
//   useEffect(() => {
//     swiper.slideTo(0);
//   }, [datas]);
//   return <></>;
// };

// const Carousel = ({ data, renderComponent }) => {
//   return (
//     <div className={styles.carouselContainer}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         spaceBetween={40}
//         slidesPerView={"auto"}
//         allowTouchMove
//         navigation
//       >
//         <Controls data={data} />
//         <CarouselLeftNavigation />
//         <CarouselRightNavigation />
//         {data.map((ele) => (
//           <SwiperSlide> {renderComponent(ele)}</SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
// export default Carousel;

import { Navigation } from 'swiper';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Carousel=({datas,renderComponent}) => {
  return (
   <div className={StyleSheet.wrapper}>
    <Swiper
      // install Swiper modules
      style={{padding:"0px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
      
    >
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
      {datas.map((ele)=>(<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
    </Swiper>
    </div>
  );
};

export default Carousel;
