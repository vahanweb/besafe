import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';

import user1 from '../../images/GetFreeConsultation/user1.png';
import chakert from '../../images/GetFreeConsultation/2.png';

import { FaCarAlt } from 'react-icons/fa';

import { HiHome } from "react-icons/hi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { TbBuildingSkyscraper } from "react-icons/tb";





import './GetFreeConsultation.css';
function GetFreeConsultation() {
    return (
        <div className="GetFreeConsultation">
            <h2>Get free consultation</h2>
            <div className='GetFreeConsultation-container'>
                <div className="GetFreeConsultation-block-1">
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
                            <div className="GetFreeConsultation-container-slider">
                                <hr />
                                <div className="slider-row-1">
                                    <p>Thoughts from our best client’s experience.</p>
                                    <img src={chakert} alt="" />
                                </div>
                                <div className="slider-row-2">
                                    <p> I have had the pleasure of working with my
                                        insurance consultant who is knowledgeable,
                                        responsive, and easy to communicate with. He
                                        offered the best rate and supported me and multiple
                                        generations in my family building a comprehensive
                                        insurance policy. I will recommend him to my friends
                                    </p>
                                </div>
                                <div className="slider-row-3">
                                    <img src={user1} alt="" />
                                    <div className="slider-row-3-col">
                                        <h3>Darlene Robertson</h3>
                                        <hr />
                                        <p>New York</p>
                                    </div>
                                </div>
                            </div>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-bg-1"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-bg-2"></div>
                        </SwiperSlide>
                        <div className="swiper-button-prev"></div> 
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
                <div className="GetFreeConsultation-block-2">
                    <div className="GetFreeConsultation-menu">
                        <ul>
                            <li className="gfcm"><FaCarAlt /> Car</li>
                            <li><HiHome /> Home</li>
                            <li><TbBuildingSkyscraper/> Trevel</li>
                            <li><BiDotsHorizontalRounded />Other</li>
                        </ul>
                    </div>
                    <div className="GetFreeConsultation-form">
                        <ul>
                            <li>Type of insurance: <strong>Car</strong></li>
                        </ul>
                        <form>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" id="name"  placeholder="Enter you name"/>
                            <br />
                            <br />
                            <label htmlFor="phone">
                                Phone number
                            </label>
                            <input type="number" id="phone" placeholder="Phone number" />
                            <br />
                            <br />
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" placeholder="Enter you Email" />
                            <br />
                            <br />
                            <label htmlFor="type-of-car">
                                Type of car
                            </label>
                            <select id="type-of-car">
                                <option disabled>Select</option>
                                <option value="a">BMW</option>
                                <option value="B">HONDA</option>
                                <option value="C">FERALI</option>
                            </select>
                            <br />
                            <br />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GetFreeConsultation;