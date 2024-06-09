import React from 'react';
import Navbar from './Navbar';
import SlideIn from './SlideIn';
import './App.css';


const App = () => {
  return (
    <>
      <Navbar />
      <div className='page' id='/'><SlideIn /></div>
      <div className='page' id='/about'><SlideIn /></div>
      <div className='page' id='/services'><SlideIn /></div>
      <div className='page' id='/contact'><SlideIn /></div>
    </>
  );
};

export default App;