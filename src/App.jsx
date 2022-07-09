import React from 'react';
import About from './components/About';
import AllLinks from './components/AllLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';

export default function App() {
  return (
	<>
		<Intro />
		<About />
		<AllLinks />
		<Contact />
		<Footer />
	</>
  )
}