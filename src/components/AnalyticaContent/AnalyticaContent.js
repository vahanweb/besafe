import React from "react";
import img_1 from '../../images/AnalyticaLogos/1.png';
import img_2 from '../../images/AnalyticaLogos/2.png';
import img_3 from '../../images/AnalyticaLogos/3.png';
import img_4 from '../../images/AnalyticaLogos/4.png';
import './AnalyticaContent.css';
function AnalyticaContent() {
    const AnalyticaBlockItem = ({classname, setImg, setTitle, setText}) => {
        return  <div className="block">
                    <div className={`row-1 ${classname}`}>
                        <img src={setImg} alt="" />
                        <h2>{setTitle}</h2>
                    </div>
                    <hr />
                    <div className='row-2'>
                        <p>{setText}</p>
                    </div>
                </div>
    }
    return (
        <div className="AnalyticaContent">
            <div className="container">
                <AnalyticaBlockItem classname='active' setImg={img_1} setTitle='Knowledgeable consultants' setText='Our members have gained many important certificates. ' />
                <AnalyticaBlockItem setImg={img_2} setTitle='Best Rates  Coverge' setText='Always provide affordable policies for our customers.' />
                <AnalyticaBlockItem setImg={img_3} setTitle='Global good reputation' setText='Voted as the best insurance company in our country.' />
                <AnalyticaBlockItem setImg={img_4} setTitle='Professional service' setText='Deal with clients’ situations in a fast and affective way.' />
            </div>
        </div>
    )
}
export default AnalyticaContent;