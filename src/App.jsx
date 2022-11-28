import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import HomeScreen from "./presenters/homeScreenPresenter.jsx";
import Header     from "./presenters/headerPresenter.jsx";
import Login      from './presenters/loginPresenter';
import CreateACC  from './presenters/createAccountPresenter.jsx';
import Show       from './presenters/show.jsx';
import Season     from './presenters/seasonPresenter.jsx';
import Game       from './presenters/gamePresenter.jsx';

import './navigation.js';
import SeasonView from './views/SeasonView';

function App(props) {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Show hash="#CreateAccount"><CreateACC/></Show>
      <Show hash="#Login"><Login/></Show>
      <Show hash="#HomeScreen #Season #Game #Quickgame #Highscores"><Header /></Show>
      <Show hash="#HomeScreen"><HomeScreen /></Show>
      <Show hash="#Season"><Season model={props.model}/></Show>
      <Show hash="#Game #Quickgame"><Game model={props.model}/></Show>
    </div>
  )
}

export default App
