import { useState } from 'react'
import './App.css'

import HomeScreen from "./presenters/homeScreenPresenter.jsx";
import Header     from "./presenters/headerPresenter.jsx";
import Login      from './presenters/loginPresenter';
import CreateACC  from './presenters/createAccountPresenter.jsx';
import Show       from './presenters/show.jsx';
import Season     from './presenters/seasonPresenter.jsx';
import Game       from './presenters/gamePresenter.jsx';
import Highscore from './presenters/highscorePresenter.jsx';
import Profile    from './presenters/profilePresenter.jsx';
import QuickGame  from './presenters/quickGamePresenter.jsx';

import './navigation.js';
import SeasonView from './views/seasonView';

function App(props) {

  function onClick() {
    props.model.closeProfileMenu();
  }

  return (
    <div className="app" onClick={onClick}>
      <Show hash="#CreateAccount"><CreateACC model = {props.model}/></Show>
      <Show hash="#Login"><Login model = {props.model}/></Show>
      <Show hash="#HomeScreen #Season #Game #QuickGame #Highscores #Profile"><Header model={props.model}/></Show>
      <Show hash="#HomeScreen"><HomeScreen model={props.model}/></Show>
      <Show hash="#Season"><Season model={props.model}/></Show>
      <Show hash="#Game"><Game model={props.model}/></Show>
      <Show hash="#QuickGame"><QuickGame model={props.model}/></Show>
      <Show hash="#Profile"><Profile model ={props.model}/></Show>
      <Show hash="#Highscore"><Highscore model={props.model}/></Show>
    </div>
  )
}

export default App
