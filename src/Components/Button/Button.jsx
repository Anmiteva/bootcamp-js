import React from "react";
import "./Button.scss";

const Button = ({text}) => {
    return <a href="/complete-menu">
            <input className='menu-button' type="submit" value={text} />
        </a>
}

export default Button;