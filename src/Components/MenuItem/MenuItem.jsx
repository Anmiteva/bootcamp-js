import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ productName, productInfo, productPrice, productId }) => {
	return (
		<div className='content-item'>
			<h3>{productName}</h3>
			<div className='content-info'>
				<p>{productInfo}</p>
				<span>${productPrice}</span>
			</div>
		</div>
	);
};

export default MenuItem;
