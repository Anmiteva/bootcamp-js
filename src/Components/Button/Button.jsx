import React from 'react';
import './Button.scss';

const Button = ({ text }) => {
	return (
		<a href='/menu' className='menu-button'>
			<span className='button-text'>{text}</span>
			{/* <input className='menu-button' type="submit" value={text} /> */}
		</a>
	);
};

export default Button;
