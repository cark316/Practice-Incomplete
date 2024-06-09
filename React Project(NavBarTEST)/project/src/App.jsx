import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'


const App = () => {
  return (
    <div className='navbar-root'>
      <img 
        src='https://file.rendit.io/n/NBTXkS0hTdhkdvsgVQmL.svg'
        alt='Logo'
        className='navbar-logo' />
      <div className='navbar-link'>
        <div className='navbar-link-text'>Link 1</div>
        <div className='navbar-link-text'>Link 2</div>
        <div className='navbar-link-text'>Link 3</div>
        <div className='navbar-link-text'>Link 4</div>
        <img
          src='https://file.rendit.io/n/9lTa0T6q7sn5nYVxRght.svg'
          alt='ArrowDown icon'
          className='navbar-arrowdown-logo' />
        <div className='navbar-button'>
          <button className='navbar-button_1'>Button</button>
          <button className='navbar-button_2'>Button</button>
        </div>
      </div>
    </div>
  )
}

export default App
