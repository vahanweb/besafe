import React from 'react';
import img_1 from '../../../images/QuestionsAnsw/3.png';
// import img_2 from '../../../images/QuestionsAnsw/2.png';
import './General.css';
export default function General() {
    const accordionList = [
        {
            title: "Section 1",
            text: `123Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
            title: "Section 2",
            text: `456Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
            title: "Section 3",
            text: `789Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        }
    ]
    const controllerAccordion = (data) => {
        data.target.classList.toggle("active")
        let panel = data.target.nextElementSibling;
        console.log(panel );
        let acc = document.querySelectorAll(".panel");
        acc.forEach((e)=>{
            e.style.display = "none";  
        })
          panel.style.display = "block";
    }
    return (
        <>
            {
                accordionList.map((item, i)=>{
                    return (
                        <div key={i} className='block'>
                            <button className="accordion" onClick={(e)=>controllerAccordion(e)}>
                                {item.title} 
                                <img src={img_1} alt=''/>
                            </button>
                            <div className="panel">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })           
            }
        </>
    );
}
                    