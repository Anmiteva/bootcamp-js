import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';

const Menu = () => {
	const menuList = [
		{
			type: 'Desserts',
			background: './menu_img/desserts.png',
			products: [
				{
					productId: '111',
					productName: 'creme brulle',
					productInfo: 'Creme Angliase, Vanilla Bean Ice Cream',
					productPrice: '7.49',
				},
				{
					productId: '2222',
					productName: 'warm chocolate',
					productInfo: 'Amarena Cherries, Kirsch Cream',
					productPrice: '6.50',
				},
				{
					productId: '3333',
					productName: 'creme brulle',
					productInfo: 'Creme Angliase, Vanilla Bean Ice Cream',
					productPrice: '7.49',
				},
				{
					productId: '4444',
					productName: 'warm chocolate',
					productInfo: 'Amarena Cherries, Kirsch Cream',
					productPrice: '6.50',
				},
				{
					productId: '55555',
					productName: 'creme brulle',
					productInfo: 'Creme Angliase, Vanilla Bean Ice Cream',
					productPrice: '7.49',
				},
				{
					productId: '6666',
					productName: 'warm chocolate',
					productInfo: 'Amarena Cherries, Kirsch Cream',
					productPrice: '6.50',
				},
			],
		},
		{
			type: 'Pizzas',
			background: './menu_img/pizzas.png',
			products: [
				{
					productId: '1231',
					productName: 'italian pizza',
					productInfo: 'Mozarella, Pomodoro & Parmagiano',
					productPrice: '14.49',
				},
				{
					productId: '1423214',
					productName: 'jabugo ham',
					productInfo: 'Jabugo ham, eggs, cheese & Red Peper',
					productPrice: '20.50',
				},
				{
					productId: '4352235',
					productName: 'cesar',
					productInfo: 'Cesar sauce, Toasts, cheese & Chicken',
					productPrice: '9.99',
				},
				{
					productId: '7545',
					productName: 'pizza bbq',
					productInfo: 'Onion, Bacon, BBQ sauce & Cheese',
					productPrice: '7.99',
				},
				{
					productId: '6787869',
					productName: 'pizza swiss',
					productInfo: 'Different swiss cheese and Secret sauce',
					productPrice: '17.99',
				},
				{
					productId: '7689',
					productName: 'italian pizza',
					productInfo: 'Mozarella, Pomodoro & Parmagiano',
					productPrice: '14.49',
				},
				{
					productId: '789',
					productName: 'jabugo ham',
					productInfo: 'Jabugo ham, eggs, cheese & Red Peper',
					productPrice: '20.50',
				},
				{
					productId: '789768',
					productName: 'cesar',
					productInfo: 'Cesar sauce, Toasts, cheese & Chicken',
					productPrice: '9.99',
				},
				{
					productId: '7897689',
					productName: 'pizza bbq',
					productInfo: 'Onion, Bacon, BBQ sauce & Cheese',
					productPrice: '7.99',
				},
				{
					productId: '768967',
					productName: 'pizza swiss',
					productInfo: 'Different swiss cheese and Secret sauce',
					productPrice: '17.99',
				},
			],
		},
		{
			type: 'Salads',
			background: './menu_img/salads.png',
			products: [
				{
					productId: '68658',
					productName: 'filet',
					productInfo: 'Different swiss cheese and Secret sauce',
					productPrice: '14.49',
				},
				{
					productId: '56785',
					productName: 'special filet',
					productInfo: 'Different swiss cheese and Secret sauce',
					productPrice: '20.50',
				},
				{
					productId: '6865843',
					productName: 'filet',
					productInfo: 'Different swiss cheese and Secret sauce',
					productPrice: '14.49',
				},
				{
					productId: '56785435',
					productName: 'special filet',
					productInfo: 'Different swiss cheese and Secret sauce',
					productPrice: '20.50',
				},
			],
		},
	];

	return (
		<Container className='complete-menu-section'>
			{menuList.map((section) => (
				<div key={section.type} className='menu-section'>
					<Row className='menu-title'>
						<Col>
							<h2>{section.type}</h2>
							<p>{`Exclusive and delicious ${section.type}`}</p>
						</Col>
					</Row>
					<Row className='menu-background' style={{ backgroundImage: `url(${section.background})` }}></Row>
					<Row className='menu-content'>
						<Col>
							{section.products.map((product) => (
								<div className='menu-item' key={product.productId}>
									<MenuItem
										productName={product.productName}
										productInfo={product.productInfo}
										productPrice={product.productPrice}
									/>
								</div>
							))}
						</Col>
					</Row>
				</div>
			))}
		</Container>
	);
};

export default Menu;
