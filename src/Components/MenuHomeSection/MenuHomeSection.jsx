import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../Button/Button';
import MenuSection from '../MenuSection/MenuSection';
import './MenuHomeSection.scss';

const MenuHomeSection = ({ menu }) => {
	return (
		<div className='main-menu'>
			<Container>
				<Row className='menu-home-section-logo'>
					<Col lg='12'>
						<div className='menu-logo'>
							<img className='main-logo' src='./menu_img/menu_logo.png' alt='alt img' />
						</div>
					</Col>
				</Row>
				<Row className='menu-home-section-content'>
					{menu.map((section) => (
						<MenuSection
							type={section.type}
							background={section.background}
							products={section.products}
							key={section.type}
						/>
					))}
				</Row>
				<Row>
					<Col lg='12' className='menu-logo-line'>
						<Button text={'view complete menu'} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MenuHomeSection;
