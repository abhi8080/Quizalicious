import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import HomeScreen from "./presenters/homeScreenPresenter.jsx";
import Header from "./presenters/headerPresenter.jsx";
import Login from './presenters/loginPresenter';
import CreateACC from './presenters/createAccountPresenter';
import Show from './presenters/show.jsx';

import './navigation.js';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Show hash="#CreateAccount"><CreateACC/></Show>
      <Show hash="#Login"><Login/></Show>
      <Show hash="#HomeScreen"><Header /></Show>
      <Show hash="#HomeScreen"><HomeScreen /></Show>
    </div>
  )
}

export default App
