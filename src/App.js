import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Carousel from "./Components/Slider/Carousel";
import './Components/Slider/carousel.scss'


import Layout from './Components/Layout';
import React from 'react';
import './App.scss';

function App() {
	
	return (
		<div className='App'>
			<Navigation />
			<Carousel indicators={true} controls={false}  />
			<Layout />
		</div>
	);
}
	export default App;