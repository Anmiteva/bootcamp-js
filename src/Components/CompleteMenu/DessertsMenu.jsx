import React from "react";
import CompleteMenuItem from "../CompleteMenuItem/CompleteMenuItem";
import "../CompleteMenuItem/CompleteMenuItem.scss";
import "./CompleteMenu.scss";

const DessertsMenu = () => {
    return <section className="complete-menu-section">
            <div className="container-complete-section">    
                <CompleteMenuItem 
                title="creme brulle"
                description="Creme Angliase, Vanilla Bean Ice Cream"
                price="7.49"
                />
                <CompleteMenuItem 
                title="warm chocolate"
                description="Amarena Cherries, Kirsch Cream"
                price="6.50"
                />
                <CompleteMenuItem 
                title="cheese cake"
                description="Cheese creme, ice cream, strawberry"
                price="4.50"
                />
                <CompleteMenuItem 
                title="apple turnover"
                description="Creme Angliase, Vamila Bean Ice Cream"
                price="7.99"
                />
                <CompleteMenuItem 
                title="sorbet with fruit"
                description="Lemon, orange, strawberry or mango"
                price="8.50"
                />
            </div>
        </section>
}

export default DessertsMenu;