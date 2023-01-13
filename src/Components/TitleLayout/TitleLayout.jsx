import React from 'react';
import './TitleLayout.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutTitleLayout = ({ title, subTitle }) => {
	
	return (
		<Container
			className='about-title'>
			<Row>
				<Col>
					<div className='about-main-title'>
						<img
							src='./header_decorator.png'
							alt='decoration'
						/>
						<h2>{title}</h2>
						<img
							src='./header_decorator.png'
							alt='decoration'
						/>
					</div>
					<div className='about-sub-title'>
						<p>{subTitle}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutTitleLayout;
