import SeasonView from "../views/SeasonView.jsx";



function SeasonPresenter(props) {

    const [, setCurrentGame] = React.useState(0);
    const [seasonCorrectAnswers, setSeasonCorrectAnswers] = React.useState(0); //Used to calculate total correct answers
    
    function updateFromModel() {
        function total(acc, curr) {
            return acc+curr;
        }
        let tempScore = props.model.rightAnswersInSeason.reduce(total,0);
        if(props.model.currentGame === 5 ) props.model.setScore(tempScore);
        setSeasonCorrectAnswers(tempScore);
        setCurrentGame(props.model.currentGame);
    }

    function backClick() {
        window.location.hash ="#HomeScreen";
        props.model.resetSeason();
    }

    function resetSeason() {
        props.model.resetSeason();
        updateFromModel();
    }

    function gameClick(number) {
        window.location.hash = "#Game";
        props.model.setCurrentGame(number);
    }        

    function launch() {
        updateFromModel();
    }

    React.useEffect(launch, []);

    return <SeasonView games={props.model.currentSeasonGames}
                        backClick={backClick}
                        gameClick={gameClick}
                        currentGame={props.model.currentGame}
                        resetSeason={resetSeason}
                        seasonCorrectAnswers={seasonCorrectAnswers}/>;
}

export default SeasonPresenter;