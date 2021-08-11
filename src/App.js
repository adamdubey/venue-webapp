import React from 'react';
import './resources/styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Venue: Live Entertainment</h1>
      <div style={{backgroundColor: 'red', height: '900px'}}></div>
      <div style={{backgroundColor: 'yellow', height: '900px'}}></div>
      <div style={{backgroundColor: 'green', height: '900px'}}></div>
      <Footer />
    </div>
  );
}

export default App;
