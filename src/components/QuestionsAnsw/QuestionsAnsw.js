import React from "react";
// import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import QuestionsAnswBgImg from '../../images/QuestionsAnsw/1.png';
import './QuestionsAnsw.css';
import General from './content/General'
import Price from './content/Price'
import Service from './content/Service'

function QuestionsAnsw() {
    return (
        <div className="QuestionsAnsw">
            <div className="QuestionsAnsw-content-1">
                <h2>You Have Questions ?</h2>
                <div className="QuestionsAnsw-content-1-content">
                    <div className="QuestionsAnsw-content-1-content-block-1">
                        <ul>
                            <li className='active'>
                                <Link to="general" >General</Link>
                            </li>
                            <li >
                                <Link to="price" >Price</Link>
                            </li>
                            <li>
                                <Link to="service" >Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="QuestionsAnsw-content-1-content-block-2">
                        <Routes>
                            <Route path="general" element={ <General /> } />
                            <Route path="price" element={ <Price/> } />
                            <Route path="service" element={ <Service/> } />
                        </Routes>
                    </div>
                </div>
            </div>
            <div className="QuestionsAnsw-content-2">
                <img src={QuestionsAnswBgImg} alt="" />
            </div>
        </div>
    )
}
export default QuestionsAnsw;