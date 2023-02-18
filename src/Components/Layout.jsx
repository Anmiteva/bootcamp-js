import { Route, Routes } from 'react-router';
import React from 'react';
import Home from './Home';
import About from './About/About';
import Menu from './Menu/Menu';
import Login from './Login/Login';
import LocalizationMap from './LocalizationMap/LocalizationMap';

const Layout = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/menu' element={<Menu />} />
			<Route path='/localization' element={<LocalizationMap />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Layout;
