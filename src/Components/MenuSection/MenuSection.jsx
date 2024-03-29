import React from 'react';
import { Col } from 'react-bootstrap';
import MenuItem from '../MenuItem/MenuItem';
import './MenuSection.scss';

const MenuSection = ({ type, background, products }) => {
	return (
		<Col lg='4' md='6'>
			<section className='menu-section'>
				<div className='container-section'>
					<h2>{type}</h2>
					{products.map((product) => (
						<MenuItem
							productName={product.productName}
							productInfo={product.productInfo}
							productPrice={product.productPrice}
							key={product.productId}
						/>
					))}
				</div>
			</section>
		</Col>
	);
};

export default MenuSection;
