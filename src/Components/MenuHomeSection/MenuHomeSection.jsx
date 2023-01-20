import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../Button/Button';
import MenuSection from '../MenuSection/MenuSection';
import './MenuHomeSection.scss'

const MenuHomeSection = ({ menu }) => {
	return (
		<div className='main-menu'>
			<Container>
				<Row>
					<Col lg='12'>
						<div className='menu-logo'>
							<img
								className='main-logo'
								src='./menu_img/menu_logo.png'
								alt='alt img'
							/>
							<img
								className='menu-logo1'
								src='./menu_img/menu_left.jpg'
								alt='alt img'
							/>
							<img
								className='menu-logo2'
								src='./menu_img/menu_right.jpg'
								alt='alt img'
							/>
						</div>
					</Col>
					<Col lg='12'>
						<div className='menu-container'>
							{menu.map((section) => (
								<MenuSection
									type={section.type}
									background={section.background}
									products={section.products}
                                    key={section.type}
								/>
							))}
						</div>
					</Col>
					<Col
						md='6'
						lg='12'>
						<div className='menu-logo-line'>
							<img
								width={430}
								height={1}
								className='menu-logo-lines'
								src='./menu_img/menu_title_line.png'
								alt='alt img'
							/>
							<Button text={'view complete menu'} />
							<img
								width={430}
								height={1}
								className='menu-logo-lines'
								src='./menu_img/menu_title_line.png'
								alt='alt img'
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MenuHomeSection;
