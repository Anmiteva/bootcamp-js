import React from 'react';
import AboutSectionLayout from '../AboutSectionLayout/AboutSectionLayout';
import TextDecoration from '../TextDecoration/TextDecoration';
import AboutTitleLayout from '../TitleLayout/TitleLayout';
import './About.scss';

const About = () => {
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
    return (
		<>
			<AboutTitleLayout
				title={aboutTitle.title}
				subTitle={aboutTitle.subTitle}
			/>
			{aboutLayoutContent.map((content) => (
				<AboutSectionLayout
					key={content.id}
					ornament={content.ornament}
					title={content.title}
					indicators={content.indicators}
					controls={content.controls}
					aboutSlider={content.aboutSlider}
					>
					<TextDecoration
						text={content.textDecoration.text}
						coloredText={content.textDecoration.coloredText}
						text2={content.textDecoration.text2}
					/>
				</AboutSectionLayout>
			))}
		</>
	)
}

export default About;