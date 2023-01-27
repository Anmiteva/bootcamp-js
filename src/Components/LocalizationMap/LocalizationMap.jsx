import React from 'react';
import './LocalizationMap.scss';

const LocalizationMap = () => {
	return (
		<div className='localizationMap'>
			<iframe
				title='localizationMap'
				id='localizationMap'
				src='https://maps.google.com/maps?q=%D1%83%D0%BB.%20%E2%80%9E%D0%94%D0%B8%D0%BC%D0%B8%D1%82%D1%8A%D1%80%20%D0%98%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%BE%D0%B2%E2%80%9C%2019,%209010%20%D0%9B%D0%B5%D0%B2%D1%81%D0%BA%D0%B8,%20%D0%92%D0%B0%D1%80%D0%BD%D0%B0&t=&z=17&ie=UTF8&iwloc=&output=embed'></iframe>
		</div>
	);
};

export default LocalizationMap;