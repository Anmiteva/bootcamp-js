import React from 'react';
import { Carousel } from 'react-bootstrap';
import AnimatedDownArrow from '../AnimatedDownArrow/AnimatedDownArrow';
import './carousel.scss';

function ControlledCarousel({ indicators, controls, slideData }) {
	return (
		<Carousel slide={false} indicators={indicators} controls={controls}>
			{slideData.map((slide) => {
				return (
					<Carousel.Item
						style={{
							backgroundImage: `url("${slide.background}")`,
						}}
						interval={5000}
						key={slide.id}>
						<img className='d-block w-100' src={slide.image} alt='' />
						
							<Carousel.Caption>
								{slide.intro && <img className='intro' src={slide.intro} alt={''} />}
								<h3 className='slide-title'>{slide.title}</h3>
								{slide.separator && <img className='separator' src={slide.separator} alt={'Pizza two' + slide.id} />}
								<p className='description'>{slide.description}</p>
								{controls && <AnimatedDownArrow />}
							</Carousel.Caption>
						
					</Carousel.Item>
				);
			})}
		</Carousel>
	
	); 
}


export default ControlledCarousel;
