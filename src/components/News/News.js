import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';

import sliderImg1 from '../../images/News/1.png';
import sliderImg2 from '../../images/News/2.png';
import sliderImg3 from '../../images/News/3.png';
import sliderImg4 from '../../images/News/4.png';
import sliderImg5 from '../../images/News/5.png';
import sliderImg6 from '../../images/News/6.png';
import folderImg from '../../images/News/folder.png';
import './News.css';

export default function News () {

        return (
            <div className="News">
                <div className="title-text-controlSlider">
                    <h2>News</h2>
                    <p>Provide you news updates and useful tips about insurance services and crucial information
                    </p>
                    <div className="control-slider">

                    </div>
                </div>
                <div className="slider">
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        // effect
                        spaceBetween={30} 
                        slidesPerView= {3}
                        loop
                        navigation= {{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                          }}
                        >
                        <SwiperSlide>
                            <div className="SwiperSlide-content">
                                <img src={sliderImg1} alt="" />
                                <div className="content">
                                    <p className="first-p">
                                        <span><img src={folderImg} alt="" /> Consultation</span>
                                        <span>July 12, 2021</span>
                                    </p>
                                    <p>Why is a car insurance and health
                                        insurance Important for your life
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="SwiperSlide-content">
                                <img src={sliderImg1} alt="" />
                                <div className="content">
                                    <p className="first-p">
                                        <span><img src={folderImg} alt="" /> Consultation</span>
                                        <span>July 12, 2021</span>
                                    </p>
                                    <p>Why is a car insurance and health
                                        insurance Important for your life
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="SwiperSlide-content">
                                <img src={sliderImg2} alt="" />
                                <div className="content">
                                    <p className="first-p">
                                        <span><img src={folderImg} alt="" /> Consultation</span>
                                        <span>July 12, 2021</span>
                                    </p>
                                    <p>Why is a car insurance and health
                                        insurance Important for your life
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="SwiperSlide-content">
                                <img src={sliderImg3} alt="" />
                                <div className="content">
                                    <p className="first-p">
                                        <span><img src={folderImg} alt="" /> Consultation</span>
                                        <span>July 12, 2021</span>
                                    </p>
                                    <p>Why is a car insurance and health
                                        insurance Important for your life
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="SwiperSlide-content">
                                <img src={sliderImg4} alt="" />
                                <div className="content">
                                    <p className="first-p">
                                        <span><img src={folderImg} alt="" /> Consultation</span>
                                        <span>July 12, 2021</span>
                                    </p>
                                    <p>Why is a car insurance and health
                                        insurance Important for your life
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="SwiperSlide-content">
                                <img src={sliderImg5} alt="" />
                                <div className="content">
                                    <p className="first-p">
                                        <span><img src={folderImg} alt="" /> Consultation</span>
                                        <span>July 12, 2021</span>
                                    </p>
                                    <p>Why is a car insurance and health
                                        insurance Important for your life
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="SwiperSlide-content">
                                <img src={sliderImg6} alt="" />
                                <div className="content">
                                    <p className="first-p">
                                        <span><img src={folderImg} alt="" /> Consultation</span>
                                        <span>July 12, 2021</span>
                                    </p>
                                    <p>Why is a car insurance and health
                                        insurance Important for your life
                                    </p>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <div className="swiper-button-prev"></div> 
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
            </div>
        );
}