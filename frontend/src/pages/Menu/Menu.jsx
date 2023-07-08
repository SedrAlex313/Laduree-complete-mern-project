import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './Menu.css'

import slide_image_1 from '../../assets/images/tranding-food-1.png';
import slide_image_2 from '../../assets/images/tranding-food-2.png';
import slide_image_3 from '../../assets/images/tranding-food-3.png';
import slide_image_4 from '../../assets/images/tranding-food-4.png';
import slide_image_5 from '../../assets/images/tranding-food-5.png';
import slide_image_6 from '../../assets/images/tranding-food-7.png';
import slide_image_7 from '../../assets/images/tranding-food-4.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMeals } from '../../actions/mealActions';
import { useEffect } from 'react';

function Menu() {
 const dispatch = useDispatch()

 const mealsState = useSelector(state => state.getAllMealsReducer)

 const{ meals , error, loading } = mealsState

 useEffect(() => {
          dispatch(getAllMeals())
 }, [])
 

  return (
<div className="menu">
  <div className="menu__container">
      <h1 className="heading">Ladurée Menu</h1>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </div>
 
  );
}

export default Menu;
