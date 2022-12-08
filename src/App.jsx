import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './animations.css';
import './App.css'

function App(props) {
  function onClick() {
    props.model.closeProfileMenu();
  }

  return (
    <div className="app" onClick={onClick}>
      <Outlet/>
    </div>
  )
}

export default App
