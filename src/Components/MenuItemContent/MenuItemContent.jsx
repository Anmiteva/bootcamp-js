import React from "react";
import "./MenuItemContent.scss";

const MenuItemContent = ({title, description, price}) => {
    return <div>
        <div className="menu-item"> 
            <div className="content-item">
                <h3>{title}</h3>
                <p>{description}</p>
                <span>${price}</span>
            </div>
        </div>
    </div>
}

export default MenuItemContent;