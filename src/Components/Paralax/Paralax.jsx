import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Paralax.scss';

const Paralax = () => {
	return (
		<div className='paralax-working-time'>
			<Container>
				<Row className='paralax-title'>
					<Col>
						<img
							className='paralax-decoration'
							src='./paralax_img/timetable-decorator.png'
							alt='decoration'
						/>
						<div className='title'>
							<h2 className='opening-hours'>OPENING HOURS</h2>
							<p className='paralax-title-text'>Call For Reservations</p>
						</div>
						<img
							className='paralax-decoration'
							src='./paralax_img/timetable-decorator2.png'
							alt='decoration'
						/>
					</Col>
				</Row>
				<Row className='paralax-content'>
					<Col>
						<h3>
							Sunday to <br /> Tuesday
						</h3>
						<p>
							09:00 <br /> 24:00
						</p>
					</Col>
					<Col>
						<h3>
							Friday and <br /> Saturday
						</h3>
						<p className='paralax-working-hours'>
							08:00 <br /> 03:00
						</p>
					</Col>
				</Row>
				<Row className='reservation'>
					<Col>
						<p>RESERVATION NUMBER: 088-9990030</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Paralax;
