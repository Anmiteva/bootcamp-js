import MenuItemContent from "../MenuItemContent/MenuItemContent";
import React from "react";
import "./MenuItem.scss";

const MenuItem = ({name}) => {
    return <section className="menu-section">
            <div className="container-section">
                <h2>{name}</h2>
                <MenuItemContent 
                title="filet"
                description="7 oz. Center Cut 10 oz. Doublecut"
                price="14.49"
                />
                <MenuItemContent 
                title="special filet"
                description="10 oz. Greg Norman Ranch"
                price="20.50"
                />
                <MenuItemContent 
                title="new york strip"
                description="9 oz. Center Cut 12 oz. Double cut oz"
                price="9.99"
                />
                <MenuItemContent 
                title="porterhouse"
                description="7 oz. Center Cut 10 oz."
                price="7.99"
                />
                <MenuItemContent 
                title="delmonico"
                description="10 oz. Greg Norman Ranch"
                price="17.99"
                />
            </div>
        </section>
}

export default MenuItem;