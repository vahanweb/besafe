import React from "react";
import HeaderMenu from "../headerMenu/headerMenu";
import ContentHeader from "./content/contentHeader";
import "./header.css";
function Header() {
    return(
        <div className="header">
            <HeaderMenu />
            <ContentHeader />
        </div>
    )
}
export default Header;