import React from "react";
import { FaAngleDown } from "react-icons/fa";
import './AnimatedDownArrow.scss';
import { useRef } from "react";

const AnimatedDownArrow = () => {
	const arrowRef = useRef(null);

	const nextSection = () => {
		const doc = arrowRef.current.ownerDocument;

		const offsetHeight = doc.querySelector("header").offsetHeight;

		doc.documentElement.style.setProperty("--scroll-padding", offsetHeight - 1 + "px");

		document.getElementById("about-title").scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div ref={arrowRef} className="chevron-container" onClick={nextSection}>
			<div className="circle">
				<div className="arrow">
					<FaAngleDown />
				</div>
			</div>
		</div>
	);
}

export default AnimatedDownArrow;