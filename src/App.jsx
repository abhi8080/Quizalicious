import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import HomeScreen from "./presenters/homeScreenPresenter.jsx";
import Header from "./presenters/headerPresenter.jsx";
import Login from './presenters/loginPresenter';
import CreateACC from './presenters/createAccountPresenter';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <CreateACC/>
      <Login/> 
        {/* <Header />
        <HomeScreen /> */}
    </div>
  )
}

export default App
