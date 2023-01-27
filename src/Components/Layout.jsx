import { Route, Routes } from 'react-router';
import React from 'react';
import Home from './Home';
import About from './About/About';
import Menu from './Menu/Menu';


const Layout = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/menu' element={<Menu />} />
		</Routes>
	);
};

export default Layout;
