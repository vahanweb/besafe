import React from "react";
import { FaFacebookF, 
        FaTwitter, 
        FaLinkedinIn
} from 'react-icons/fa';

import user_img_1 from '../../images/TeamMembers/user1.png';
import user_img_2 from '../../images/TeamMembers/user2.png';
import user_img_3 from '../../images/TeamMembers/user3.png';
import user_img_4 from '../../images/TeamMembers/user4.png';


import './TeamMembers.css';
function TeamMembers() {
    const teamList = [
        {
            user_img: user_img_1,
            full_name: "Savannah Nguyen",
            specialist: "President of Sales",
            user_social_links: [FaFacebookF, FaLinkedinIn, FaTwitter]
        },{
            user_img: user_img_2,
            full_name: "Darlene Robertson",
            specialist: "Marketing Coordinator",
            user_social_links: [FaFacebookF, FaLinkedinIn, FaTwitter]
        },{
            user_img: user_img_3,
            full_name: "Guy Hawkins",
            specialist: "Senior Project Manager",
            user_social_links: [FaFacebookF, FaLinkedinIn, FaTwitter]
        },{
            user_img: user_img_4,
            full_name: "Albert Flores",
            specialist: "Medical Assistant",
            user_social_links: [FaFacebookF, FaLinkedinIn, FaTwitter]
        },
    ]
    return (
        <div className="TeamMembers">
            <h2>Team Members</h2>
            <p>Meet our team of experienced & knowledgeable consultants who make our customers
                pleased with ability to clarify insurance issues.
            </p>
            <div className="team-content">
                {
                    teamList.map((item, ii)=>{
                        return (
                            <div className="team-block" key={ii}>
                                <img src={item.user_img} alt="" />
                                <h3>{item.full_name}</h3>
                                <h5>{item.specialist}</h5>
                                <ul>
                                    {item.user_social_links.map((items, i) => {
                                        const icon = items;
                                        return (
                                        <li key={i}>
                                            <a href="#d">
                                            {
                                                icon()
                                            }
                                            </a>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default TeamMembers;