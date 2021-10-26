import React from 'react';
import Single from './components/Single';
import Header from './components/Header';


import './App.css';

function App() {
  return (
    
    
    <div className="App" style={{ 
      backgroundImage: "url(/background.png)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      height: "auto" }} >     
      <Single />
      <Header />
    </div>
    
  );
}

export default App;
