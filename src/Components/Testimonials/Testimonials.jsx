import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Testimonials.scss';
import ControlledCarousel from '../Slider/Carousel';

const Testimonials = () => {
	let testimonialsSlideData = [
		{
			id: 'comment1',
			alt: 'AAAAA',
			intro: '',
			separator: '',
			title: 'Amazing restaurant! I recommend it warmly! You will not regret!',
			description: 'Alexander Smith',
		},
		{
			id: 'comment2',
			alt: 'BBBBB',
			intro: '',
			separator: '',
			title: 'Good service, delicious food, kind people!',
			description: 'John Doe',
		},
		{
			id: 'comment3',
			alt: 'CCCCC',
			intro: '',
			separator: '',
			title: 'Everything was perfect!',
			description: 'Jane Doe',
		},
	];

	return (
		<div className='testimonials-section'>
			<Container>
				<Row className='pizza-logo'>
					<Col>
						<div>
							<img
								className='testimonials-logo'
								src='./testimonials/testimonials_logo.png'
								alt='decoration'
							/>
						</div>
					</Col>
				</Row>
				<Row className='testimonials-title'>
					<Col className='title-column'>
						<div className='title'>
							<h2 className='testimonials'>TESTIMONIALS</h2>
						</div>
					</Col>
				</Row>
				<Row className='testimonials-slider'>
					<Col className='slider-column'>
						<div className='slider'>
							<ControlledCarousel
								indicators={true}
								controls={false}
								slideData={testimonialsSlideData}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Testimonials;
