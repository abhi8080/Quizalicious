import './homeScreenView.css';
import { Link } from "react-router-dom";
import Owl from "../presenters/OwlPresenter";

function HomeScreenView(props) {


    return  <div className={"homeScreen appear "+(props.didClick&&"implode")}>
                {/* <img src="Quizalicious logo.svg" className="logo" alt="" /> */}

                {/* <h1>Welcome to Quizalicious!</h1> */}
                {/* <img src="Quizalicious logo full dark theme.svg" width="200" class="logo" alt="" /><br/> */}
                <div className="owl">
                  <Owl className="owl"/>
                </div>
                <img src="Quizalicious logo.svg" className="smallLogo" alt="" />
                <span className="menuTitle">Game menu</span>
                <img src="Quizalicious logo.svg" className="smallLogo" alt="" />
                <div className="buttonWrapper">
                    <button className="homeScreen scale-in-center" onClick={props.newSeason}>New Season</button>
                    <button className="homeScreen scale-in-center" onClick={props.newQuickGame}>New quick game</button>
                    <button className="homeScreen scale-in-center" onClick={props.showHighscores}>Show highscores</button>
                </div>
            </div>;
}

export default HomeScreenView;