import React from "react";
import CompleteMenuItem from "../CompleteMenuItem/CompleteMenuItem";
import "../CompleteMenuItem/CompleteMenuItem.scss";
import "./CompleteMenu.scss";

const SaladsMenu = () => {
    return <section className="complete-menu-section">
            <div className="container-complete-section">
                <CompleteMenuItem 
                title="italian salad"
                description="Mozarella, Pomodoro & Parmagiano"
                price="14.49"
                />
                <CompleteMenuItem 
                title="jabugo ham"
                description="Jabugo ham, eggs, cheese & Red Peper"
                price="20.50"
                />
                <CompleteMenuItem 
                title="cesar"
                description="Cesar sauce, Toasts, cheese & Chicken"
                price="9.99"
                />
                <CompleteMenuItem 
                title="bbq salad"
                description="Onion, Bacon, BBQ sauce & Cheese"
                price="7.99"
                />
                <CompleteMenuItem 
                title="swiss salad"
                description="Different swiss cheese and Secret sauce"
                price="17.99"
                />
            </div>
        </section>
}

export default SaladsMenu;