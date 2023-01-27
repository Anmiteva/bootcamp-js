import React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import './Components/Slider/carousel.scss'
import Layout from './Components/Layout';
import ContactForm from './Components/Contact_Form/ContactForm';
import LocalizationMap from './Components/LocalizationMap/LocalizationMap';

function App() {
	
	return (
		<div className='App'>
		
			<Navigation />
			
			<Layout />
			<ContactForm />
			<LocalizationMap />
		</div>
	);
}
	export default App;
