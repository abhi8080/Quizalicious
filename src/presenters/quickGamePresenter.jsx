import QuickGameView from '../views/quickGameView.jsx';
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import React from "react";

function QuickGame(props) {
    const [category,setCategory]        = React.useState(0);
    const [difficulty,setDifficulty]    = React.useState(0);

    const [exiting, setExiting]         = React.useState(false);

    function randomGame() {
        setTimeout(()=>{
            window.location.hash="#Game";
            props.model.setQuickGame("","");
        },800);
        setExiting(true);
    }

    function categoryChange(val) {
        setCategory(val);
    }

    function difficultyChange(diff) {
        setDifficulty(diff);
    }

    function startGame() {
        setTimeout(()=>{
            props.model.setQuickGame(category,difficulty);
            window.location.hash="#Game";
        },800);
        setExiting(true);
    }

    if( !props.model.currentUser )
        return <NotLoggedIn />;

    return <QuickGameView   exiting={exiting}
                            randomGame={randomGame}
                            categoryChange={categoryChange}
                            difficultyChange={difficultyChange}
                            startGame={startGame}/>;
}

export default QuickGame;