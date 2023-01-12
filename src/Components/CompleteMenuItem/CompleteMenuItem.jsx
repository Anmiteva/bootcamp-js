    import React from "react";
    import "./CompleteMenuItem.scss";

    const CompleteMenuItem = ({title, description, price}) => {
        return <div>
            <div className="complete-menu-item"> 
                <div className="complete-content-item">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>${price}</span>
                </div>
            </div>
        </div>
    }

    export default CompleteMenuItem;