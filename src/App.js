import React from 'react';
import './resources/styles.css';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>
      <div style={{backgroundColor: 'red', height: '900px'}}></div>
      <div style={{backgroundColor: 'yellow', height: '900px'}}></div>
      <div style={{backgroundColor: 'green', height: '900px'}}></div>
      <Footer />
    </div>
  );
}

export default App;
