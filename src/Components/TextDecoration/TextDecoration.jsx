import React from 'react';
import './TextDecoration.scss';

const TextDecoration = ({
	text,
	coloredText,
	text2,
	coloredText2,
	text3,
	coloredText3,
}) => {
	return (
		<p>
			{text}
			<span className='decoration'>{coloredText}</span>
			{text2}
			<span className='decoration'>{coloredText2}</span>
			{text3}
			{coloredText3}
		</p>
	);
};

export default TextDecoration;
