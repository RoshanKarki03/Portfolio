import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../../Portfolio/About';
import Portfolio from '../../Portfolio/Portfolio';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Portfolio />} />
				<Route path='about' exact element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
