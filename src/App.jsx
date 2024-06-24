import React from 'react';
import './App.css'
import NavigationBar from '../components/NavigationBar';
import Slider from '../components/Slider';
import Test from '../components/test';
import About from '../components/about';
function App() {
  return (
    <div className="app-container"> 
    <NavigationBar /> {/* navbar contents viz utiliy menu, shortcut menu and main menu on the right and company name and logo in the left */}
    <Slider />
    <About/>
    <Test/>
  </div>
  );
}

export default App;
