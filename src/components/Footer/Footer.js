import React from "react";
import { FaFacebookF, 
        FaTwitter, 
        FaInstagram, 
        FaLinkedinIn
} from 'react-icons/fa';
import logo from '../../images/Footer/1.png';

import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="content">
                <div className="row-1">
                    <div className="block block-1">
                        <img src={logo} alt="" />
                        <hr />                        
                        <h2>Insurance Agency</h2>
                        <p>Providing the best combination of
                            expense and coverage for our
                            customers
                        </p>
                        <ul>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                    <div className="block block-2">
                        <h2>Contact info</h2>
                        <hr />
                        <ul>
                            <li><HiOutlineMail /> alma.lawson<code>@</code>example.com</li>
                            <li><MdOutlinePhoneInTalk />  <code>(</code>303<code>)</code>555<code>-</code>0105</li>
                            <li><FiMapPin /> 6391 Elgin St.  Celina. Delaware 10299</li>
                        </ul>
                    </div>
                    <div className="block block-3">
                        <h2>Service</h2>
                        <hr />
                        <ul>
                            <li><a href="#a">Home Insurance</a></li>
                            <li><a href="#a">Car Insurance</a></li>
                            <li><a href="#a">Health Insurance</a></li>
                            <li><a href="#a">Travel Insurance</a></li>
                            <li><a href="#a">Business Insurance</a></li>
                            <li><a href="#a">Agri Insurance</a></li>
                        </ul>
                    </div>
                    <div className="block block-4">
                        <h2>Subscribe</h2>
                        <hr />
                        <label>
                            <span>
                                <HiOutlineMail />
                            </span>
                            <input type="email" placeholder="Enter your email"/>
                        </label>
                        <p>Send an email and you will receive our
                            newsletters, service   related blogs and press
                            releases regularly.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="row-2">
                    <p>Copyright 2021 ovatheme, All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer