
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.scss';


function ControlledCarousel(props) {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
			<Carousel 
				indicators={props.indicators}
				controls={props.controls}
				activeIndex={index}
				onSelect={handleSelect}>
		
			<Carousel.Item >
				<img 
					className='d-block w-100'
					src={require('./images/03.jpg')} 
					alt='First slide'
				/>
			</Carousel.Item>
					
			<Carousel.Item interval={2000}>
				<img
					className='d-block w-100'
					src={require('./images/01.jpg')}
					alt='Second slide'
				/>
			</Carousel.Item>
		
			<Carousel.Item interval={2000}>
				<img
					className='d-block w-100'
					src={require('./images/02.jpg')}
					alt='Third slide'
				/>
			
				<ol className="carousel-indicators">
                    <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#mycarousel" data-slide-to="1" ></li>
                    <li data-target="#mycarousel" data-slide-to="2" ></li>
            </ol>
			</Carousel.Item>
		</Carousel>		
	);
}

export default ControlledCarousel;




