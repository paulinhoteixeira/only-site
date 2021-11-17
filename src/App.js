import React from 'react';
import Single from './components/Single';
import Home from './pages/Home';


import './App.css';

function App() {
  return (
    
    
    <div className="App" style={{ 
      backgroundImage: "url(/background.png)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      height: "auto",
      width: "auto"}} >     
      <Single />
      <div className="divider-1"></div>
      <Home />
      
    </div>
    
  );
}

export default App;
