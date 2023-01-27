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
					productInfo: '7 oz. Center Cut 10 oz. Doublecut',
					productPrice: '14.49',
				},
				{
					productId: '56785',
					productName: 'special filet',
					productInfo: '10 oz. Greg Norman Ranch',
					productPrice: '20.50',
				},
			],
		},
	];

	return (
		<Container>
			<section className='complete-section'>
				{menuList.map((section) => (
					<div key={section.type} className='complete-menu'>
						<Row>
							<Col md='10' lg='12'>
								<div className='complete-menu-line'>
									<img
										width={400}
										height={1}
										className='complete-menu-lines'
										src='./menu_img/menu_title_line.png'
										alt='alt img'
									/>
									<h2>{section.type}</h2>
									<img
										width={400}
										height={1}
										className='complete-menu-lines'
										src='./menu_img/menu_title_line.png'
										alt='alt img'
									/>
								</div>
							</Col>
						</Row>
						<p className='color'>{`Exclusive and delicious ${section.type}`}</p>
						<img width={450} height={300} src={section.background} alt='alt img' />
						<Row className='bottom'>
							<Col>
								<div className='complete-menu-item'>
									{section.products.map((product) => (
										<MenuItem
											key={product.productId}
											productName={product.productName}
											productInfo={product.productInfo}
											productPrice={product.productPrice}
										/>
									))}
								</div>
							</Col>
						</Row>
					</div>
				))}
			</section>
		</Container>
	);
};

export default Menu;
