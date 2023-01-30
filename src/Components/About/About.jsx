import React from 'react';
import AboutLayout from '../AboutLayout/AboutLayout';
import './About.scss';

const About = () => {
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
					background: './about01.jpg',
					intro: '',
					separator: '',
					title: '',
					description: '',
				},
				{
					id: 'aboutSlider2',
					background: './about02.jpg',
					intro: '',
					separator: '',
					title: '',
					description: '',
				},
				{
					id: 'aboutSlider3',
					background: './about03.jpg',
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
					background: './about04.jpg',
					intro: '',
					separator: '',
					title: '',
					description: '',
				},
				{
					id: 'aboutSlider5',
					background: './about05.jpg',
					intro: '',
					separator: '',
					title: '',
					description: '',
				},
				{
					id: 'aboutSlider6',
					background: './about06.jpg',
					intro: '',
					separator: '',
					title: '',
					description: '',
				},
			],
		},
	];

	return (
		<>
			<div className='margin5'>
				<AboutLayout aboutTitle={aboutTitle} aboutLayoutContent={aboutLayoutContent} />
			</div>
		</>
	);
};

export default About;
