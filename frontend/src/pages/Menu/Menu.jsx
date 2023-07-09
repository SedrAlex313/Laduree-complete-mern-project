import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper.min.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './Menu.css'

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
    <div>
<div className="menu">
  <div className="menu__container">
      <h1 className="heading">Ladurée Menu</h1>
      {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
         < h1>Error: {error.message}</h1>
        ) : (
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
       {meals.map((meal) => (
              <SwiperSlide key={meal.id}>
                <img src={meal.image} alt="meal_image" />
              </SwiperSlide>
            ))}
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
        )}

    </div>
    </div>
    </div>
  );
}

export default Menu;
