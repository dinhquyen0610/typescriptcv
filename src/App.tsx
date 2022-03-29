import { useState, useEffect} from 'react'
import React from 'react'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import './App.scss'
 function App() {
  return (
      <div className='container'>
        <Header />
        <div className='row'>
          <Sidebar/>
          <Main />
        </div>
      </div>
  
  )
}
export default App;

