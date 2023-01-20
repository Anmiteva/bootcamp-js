import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ productName, productInfo, productPrice, productId }) => {
	return (
		<div>
			<div className='menu-item'>
				<div className='content-item'>
					<h3>{productName}</h3>
					<p>{productInfo}</p>
					<span>${productPrice}</span>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
