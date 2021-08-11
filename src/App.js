import React from 'react';
import './resources/styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Venue: Live Entertainment</h1>
      <Footer />
    </div>
  );
}

export default App;
