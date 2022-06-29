import React from 'react';

import Home from './pages/home/Home';
import HomeParallax from './components/Home-Parallax/HomeParallax';
import About from './pages/about/About';
import AboutParallax from './components/About-Parallax/AboutParallax';
import Content from './pages/content/Content';
import Craft from './pages/craft/Craft';

function App() {
    return (
        <div className="app">
            <Home />
            <HomeParallax />
            <About />
            <AboutParallax />
            <Content />
            <Craft />
        </div>
    );
}

export default App;