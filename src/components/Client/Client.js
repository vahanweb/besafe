import React from "react";
import cl_img_1 from '../../images/Client/1.png'
import cl_img_2 from '../../images/Client/2.png'
import cl_img_3 from '../../images/Client/3.png'
import cl_img_4 from '../../images/Client/4.png'
import cl_img_5 from '../../images/Client/5.png'
import './Client.css'
function Client() {
    return (
        <div className="Client">
            <div className="img"><img src={cl_img_1} alt="" /></div>
            <div className="img"><img src={cl_img_2} alt="" /></div>
            <div className="img"><img src={cl_img_3} alt="" /></div>
            <div className="img"><img src={cl_img_4} alt="" /></div>
            <div className="img"><img src={cl_img_5} alt="" /></div>
        </div>
    )
}
export default Client;