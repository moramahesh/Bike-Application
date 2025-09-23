import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import NewModel from './components/shop';
import LatestNews from './components/News';
import Contact from './components/contact';
import Footer from './components/footer';
import About from './components/about';
import Faq from './components/faq';

function App() {
  return (
    <Router>
      <Navbar />
      <NewModel />
      <LatestNews/>
      <Faq />
      <About />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
