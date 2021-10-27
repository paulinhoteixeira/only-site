import React from 'react';
import Single from './components/Single';
import Header from './components/Header';
import Home from './components/Home';


import './App.css';

function App() {
  return (
    
    
    <div className="App" style={{ 
      backgroundImage: "url(/background.png)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      height: "auto" }} >     
      <Single />
      <div className="divider-1"></div>
      <Header />
      <div className="divider-2"></div>
      <Home />
      <div className="divider-1"></div>
    </div>
    
  );
}

export default App;
