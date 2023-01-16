import React from 'react';
import AboutSectionLayout from '../AboutSectionLayout/AboutSectionLayout';
import TextDecoration from '../TextDecoration/TextDecoration';
import TitleLayout from '../TitleLayout/TitleLayout';
import './AboutLayout.scss';

const AboutLayout = ({ aboutTitle, aboutLayoutContent }) => {
    return (
        <>
			<TitleLayout
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

export default AboutLayout;