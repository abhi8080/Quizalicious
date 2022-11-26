import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import HomeScreen from "./presenters/homeScreenPresenter.jsx";
import Header from "./presenters/headerPresenter.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <HomeScreen />
    </div>
  )
}

export default App
