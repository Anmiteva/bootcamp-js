import React from "react";
import { FaAngleDown } from "react-icons/fa";
import './AnimatedDownArrow.scss';

const AnimatedDownArrow = () => {
    return <div className='circle'>
	            <div className="arrow">
	            <FaAngleDown />
	            </div>
            </div>
}

export default AnimatedDownArrow;