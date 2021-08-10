import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import Information from './components/Information/Information';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueinfo">
        <Information />
      </Element>
        
      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
