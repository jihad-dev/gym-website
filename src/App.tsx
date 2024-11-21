import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Membership from './components/Membership';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <About />
        <Classes />
        <Membership />
        <Blog />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;