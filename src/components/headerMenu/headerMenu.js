import React from "react";
import { useState } from "react";
import logoHeader from "../../images/logo/logo-header.png";
import menuItemImg from "../../images/menu/vector1.png";
import "./headerMenu.css";

function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const CenuItem = ({ classActive, link_text, link_img }) => {
    return (
      <li className={classActive}>
        <a href="/">
          {link_text} {link_img ? <img src={menuItemImg} alt='' /> : ""}
        </a>
      </li>
    );
  };
  return (
    <div className="header-menu">
      <div className="header-content">
        <div className="logo">
          <img src={logoHeader} alt="" />
        </div>
        <div className="menu-line">
          <ul>
            <CenuItem link_text="Home" classActive="active" />
            <CenuItem link_text="About" />
            <CenuItem link_text="Service" />
            <CenuItem link_text="Case Studies" />
            <li
              onClick={() => {
                setOpen(!open);
              }}
            >
              <a href="#vk.com/">Page {<img src={menuItemImg} alt='' />}</a>
            </li>
            <CenuItem link_text="Blog" />
          </ul>
          <div className={open ? "activedropdownmenu" : "dropdownmenu"}>
            <ul>
              <li>
                <a href="#a">Page 1</a>
              </li>
              <li>
                <a href="#a">Page 2</a>
              </li>
              <li>
                <a href="#a">Page 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="button-contact">
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
}
export default HeaderMenu;
