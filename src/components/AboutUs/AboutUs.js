import React from "react";
import { useState } from 'react';
import videoPosterImage from '../../images/about/1.png';
import videoPlayer from '../../images/about/2.png';
import videoUrl from '../../images/about/1.mp4';
import './AboutUs.css';
function AboutUs() {
    const [play,setPlay] = useState(false);
    const setAtribute = () => {
        let video = document.querySelector("video");
        let videoImg = document.querySelector(".block-2 img");
        if (play) {
            videoImg.style.display = 'none';
            video.setAttribute('controls', 'controls');
            video.setAttribute('autoPlay', 'autoPlay');
        }
    }
    return (
        <div className='AboutUs'>
            <div className='block-1'>
                <h2>About Us</h2>
                <p>We provide a comprehensive range of insurance services that
                is useful for customers and have won many prestigious
                awards over the past 20 years '{ play ? '' : ''}'
                </p>
                <div className='about-us-statistics'>
                    <div className="statistics"><span>15</span><p>Experience years</p></div>
                    <div className="statistics"><span>360</span><p>Customers</p></div>
                    <div className="statistics"><span>620</span><p>Projects done</p></div>
                    <div className="statistics"><span>30</span><p>Awards</p></div>
                </div>
                <a href="https://vk.com/">View Details</a>
            </div>
            <div className='block-2'>
                <video src={videoUrl} poster={videoPosterImage}></video>
                <img src={ videoPlayer } onClick={()=>{
                    setPlay(!play);
                    setAtribute();
                }}  alt="" />
            </div>
        </div>
    )
}
export default AboutUs;