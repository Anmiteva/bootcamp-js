import React from 'react';
import ControlledCarousel from './Slider/Carousel';
import AnimatedDownArrow from './AnimatedDownArrow/AnimatedDownArrow';
import AboutLayout from './AboutLayout/AboutLayout';

const Home = () => {
	const aboutTitle = {
		title: 'ABOUT US',
		subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at optio sit doloremque consequatur quod earum ad atque provident molestias!',
	};

	const aboutLayoutContent = [
		{
			id: 'layout1',
			ornament: true,
			title: 'The History',
			indicators: false,
			controls: false,
			textDecoration: {
				text: 'Lorem ipsum dolor sit amet consectetur',
				coloredText: ' Voluptatem',
				text2: ' dignissimos delectus fugit expedita tenetur quis magni! Natus iusto ut dolorum ipsa fugiat voluptate, porro tempore eligendi, nesciunt ex mollitia doloribus tenetur minus dignissimos, provident harum obcaecati velit omnis asperiores. Quas ex consectetur, veritatis eum impedit enim nihil officiis, sunt molestias laudantium esse, accusamus consequatur! Obcaecati, unde est. Tenetur aliquam optio possimus eos molestiae architecto aliquid nobis, labore sapiente iste commodi quae impedit harum? Quam culpa laborum unde provident aut numquam rerum voluptatibus minima, tenetur itaque, quis velit deserunt tempora pariatur doloremque nisi odit, eos repellat. Rem molestias blanditiis similique possimus.',
			},
			aboutSlider: [
				{
						  id: 'aboutSlider1',
						  image: './about01.jpg',
						  intro: '',
						  separator: '',
						  title: '',
						  description: '',
						},
						{
						  id: 'aboutSlider2',
						  image: './about02.jpg',
						  intro: '',
						  separator: '',
						  title: '',
						  description: '',
						},
						{
						  id: 'aboutSlider3',
						  image: './about03.jpg',
						  intro: '',
						  separator: '',
						  title: '',
						  description: '',
						}
			]
		},
		{
			id: 'layout2',
			ornament: false,
			title: 'The History',
			indicators: true,
			controls: false,
			textDecoration: {
				text: 'Lorem ipsum dolor sit amet consectetur',
				coloredText: ' Voluptatem',
				text2: ' dignissimos delectus fugit expedita tenetur quis magni! Natus iusto ut dolorum ipsa fugiat voluptate, porro tempore eligendi, nesciunt ex mollitia doloribus tenetur minus dignissimos, provident harum obcaecati velit omnis asperiores. Quas ex consectetur, veritatis eum impedit enim nihil officiis, sunt molestias laudantium esse, accusamus consequatur! Obcaecati, unde est. Tenetur aliquam optio possimus eos molestiae architecto aliquid nobis, labore sapiente iste commodi quae impedit harum? Quam culpa laborum unde provident aut numquam rerum voluptatibus minima, tenetur itaque, quis velit deserunt tempora pariatur doloremque nisi odit, eos repellat. Rem molestias blanditiis similique possimus.',
			},
			aboutSlider: [
				{
						  id: 'aboutSlider4',
						  image: './about04.jpg',
						  intro: '',
						  separator: '',
						  title: '',
						  description: '',
						},
						{
						  id: 'aboutSlider5',
						  image: './about05.jpg',
						  intro: '',
						  separator: '',
						  title: '',
						  description: '',
						},
						{
						  id: 'aboutSlider6',
						  image: './about06.jpg',
						  intro: '',
						  separator: '',
						  title: '',
						  description: '',
						}
			]
		},
	];

	let homeSlideData = [
		{
			id: 1,
			image: './01.jpg',
			intro: './logo_intro_red.png',
			separator: './slide-separator.png',
			title: 'italian style restaurant',
			description: 'The Chef creates devine combinations',
		},
		{
			id: 2,
			image: './02.jpg',
			intro: './logo_intro_red.png',
			separator: './slide-separator.png',
			title: 'welcome to restaurant',
			description: 'The Chef creates devine combinations',
		},
		{
			id: 3,
			image: './03.jpg',
			intro: './logo_intro_red.png',
			separator: './slide-separator.png',
			title: 'elexir exclusively foood',
			description: 'The Chef creates devine combinations',
		},
	];

	return (
		<>
			<ControlledCarousel indicators={false} controls={true} slideData={homeSlideData} />
			<AnimatedDownArrow />
			<AboutLayout aboutTitle={aboutTitle} aboutLayoutContent={aboutLayoutContent} />
		</>
	);
};

export default Home;