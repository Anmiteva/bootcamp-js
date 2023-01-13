import React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Layout from './Components/Layout';
import ContactForm from './Components/Contact_Form/ContactForm';

function App() {
	
	return (
		<div className='App'>
			<Navigation />
			<Layout />
			<ContactForm />
		</div>
	);
}
	export default App;