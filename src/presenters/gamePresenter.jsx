import GameView from "../views/gameView.jsx";

function SeasonPresenter(props) {

    const [currentGame, setCurrentGame] = React.useState(0);
    const [gameDone, setGameDone] = React.useState(false);
    function optionClick(option) {
        
        props.model.answers[currentGame] = option;

        if( currentGame === 4 )
            setGameDone(true);
        else
            setCurrentGame(currentGame+1);
    }
    function backClick() {
        window.location.hash = "#HomeScreen";
    }

    return <GameView    games={props.model.currentGameQuestions}
                        currentGame={currentGame}
                        optionClick={optionClick}
                        gameDone={gameDone}
                        backClick={backClick}
                        rightAnswers={props.model.rightAnswers}
                        answers={props.model.answers}/>
}

export default SeasonPresenter;