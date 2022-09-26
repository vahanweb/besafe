import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';

import sliderImg1 from '../../images/Service/1.png';
import sliderImg2 from '../../images/Service/2.png';
import sliderImg3 from '../../images/Service/3.png';
import sliderImg4 from '../../images/Service/4.png';
import sliderImg5 from '../../images/Service/5.png';
import sliderImg6 from '../../images/Service/6.png';
import './Service.css';

export default function Service () {

        return (
            <div className="Service">
                <div className="title-text-controlSlider">
                    <h2>Service</h2>
                    <p>We provide insurance services to help protect you and your family
                        from huge expenses in the future such as paying for dental work, 
                        medical treatments
                    </p>
                    <div className="control-slider">

                    </div>
                </div>
                <div className="slider">
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        effect
                        spaceBetween={30} 
                        slidesPerView="auto"
                        loop
                        navigation= {{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                          }}
                        >
                        <SwiperSlide>
                            <img src={sliderImg1} alt="" />
                            <div className="SwiperSlide-content">
                                <div className="content">
                                    <h3>Agri Insurance</h3>
                                    <p>Agri Insurance not only helps farmers to have a financial stability but also
                                        ensure food security and stability for all countries over 
                                        the world.
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide><img src={sliderImg2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sliderImg3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sliderImg4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sliderImg5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sliderImg6} alt="" /></SwiperSlide>
                        <div className="swiper-button-prev"></div> 
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
            </div>
        );
}