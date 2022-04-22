import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

const App = () => {
	const [cursorX, setCursorX] = useState();
	const [cursorY, setCursorY] = useState();

	window.addEventListener('mousemove', (e) => {
		setCursorX(e.pageX);
		setCursorY(e.pageY);
	});
	return (
		<div className='App'>
			<HeroSection />
			<Skills />
			<Projects />
			<About />
			<Contact />
			<Footer />
			<div
				className='cursor'
				style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>
		</div>
	);
};

export default App;
