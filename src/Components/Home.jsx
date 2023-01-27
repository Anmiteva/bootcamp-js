import React from 'react';
import ControlledCarousel from './Slider/Carousel';
import AnimatedDownArrow from './AnimatedDownArrow/AnimatedDownArrow';
import AboutLayout from './AboutLayout/AboutLayout';
import MenuHomeSection from './MenuHomeSection/MenuHomeSection';
import Paralax from './Paralax/Paralax';

const Home = () => {
	const aboutTitle = {
		title: 'ABOUT US',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at optio sit doloremque consequatur quod earum ad atque provident molestias!',
	};

	const aboutLayoutContent = [
		{
			id: 'layout1',
			ornament: true,
			title: 'The History',
			slide: true,
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
				},
			],
		},
		{
			id: 'layout2',
			ornament: false,
			title: 'The History',
			slide: true,
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
				},
			],
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

	const menuList = [
		{
			type: 'Great Pasta',
			background: '',
			products: [
				{
					productId: '1331',
					productName: 'filet',
					productInfo: '7 oz. Center Cut 10 oz. Doublecut',
					productPrice: '14.49',
				},
				{
					productId: '43242',
					productName: 'special filet',
					productInfo: '10 oz. Greg Norman Ranch',
					productPrice: '20.50',
				},
				{
					productId: '345543',
					productName: 'new york strip',
					productInfo: '9 oz. Center Cut 12 oz. Double cut oz',
					productPrice: '9.99',
				},
				{
					productId: '556',
					productName: 'porterhouse',
					productInfo: '7 oz. Center Cut 10 oz.',
					productPrice: '7.99',
				},
				{
					productId: '6578',
					productName: 'delmonico',
					productInfo: '10 oz. Greg Norman Ranch',
					productPrice: '17.99',
				},
			],
		},
		{
			type: 'Our Pizzas',
			background: '',
			products: [
				{
					productId: '78976',
					productName: 'filet',
					productInfo: '7 oz. Center Cut 10 oz. Doublecut',
					productPrice: '14.49',
				},
				{
					productId: '244343',
					productName: 'special filet',
					productInfo: '10 oz. Greg Norman Ranch',
					productPrice: '20.50',
				},
				{
					productId: '54765',
					productName: 'new york strip',
					productInfo: '9 oz. Center Cut 12 oz. Double cut oz',
					productPrice: '9.99',
				},
				{
					productId: '3456',
					productName: 'porterhouse',
					productInfo: '7 oz. Center Cut 10 oz.',
					productPrice: '7.99',
				},
				{
					productId: '325234',
					productName: 'delmonico',
					productInfo: '10 oz. Greg Norman Ranch',
					productPrice: '17.99',
				},
			],
		},
		{
			type: 'Desserts',
			background: '',
			products: [
				{
					productId: '345',
					productName: 'filet',
					productInfo: '7 oz. Center Cut 10 oz. Doublecut',
					productPrice: '14.49',
				},
				{
					productId: '435634',
					productName: 'special filet',
					productInfo: '10 oz. Greg Norman Ranch',
					productPrice: '20.50',
				},
				{
					productId: '57447',
					productName: 'new york strip',
					productInfo: '9 oz. Center Cut 12 oz. Double cut oz',
					productPrice: '9.99',
				},
				{
					productId: '68678',
					productName: 'porterhouse',
					productInfo: '7 oz. Center Cut 10 oz.',
					productPrice: '7.99',
				},
				{
					productId: '435643',
					productName: 'delmonico',
					productInfo: '10 oz. Greg Norman Ranch',
					productPrice: '17.99',
				},
			],
		},
	];

	return (
		<>
			<ControlledCarousel indicators={false} controls={true} slideData={homeSlideData} />
			<AnimatedDownArrow />
			<AboutLayout aboutTitle={aboutTitle} aboutLayoutContent={aboutLayoutContent} />
			<MenuHomeSection menu={menuList} />
			<Paralax />
		</>
	);
};

export default Home;
