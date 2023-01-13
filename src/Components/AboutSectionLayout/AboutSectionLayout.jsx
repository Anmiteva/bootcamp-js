import React from 'react';
import './AboutSectionLayout.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlledCarousel from '../Slider/Carousel';

const AboutSectionLayout = ({ ornament, title, indicators, controls, aboutSlider, children }) => {
	function ShowOrnament(prop) {
		if (!prop.ornament) {
			return null;
		}
		return (
			<img
				className='ornament'
				src='./ornament.png'
				alt='ornament'
			/>
		);
	}

	return (
		<Container
			className='about-section-layout'>
			<Row className={!ornament ? 'flex-row-reverse' : ''}>
				<Col md={true}>
					<h3 className={!ornament ? 'displayNone' : ''}>{title}</h3>
					{children}
					<ShowOrnament ornament={ornament} />
				</Col>
				<Col md={true} className='slider'>
					<ControlledCarousel
						indicators={indicators}
						controls={controls}
						slideData={aboutSlider}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutSectionLayout;
