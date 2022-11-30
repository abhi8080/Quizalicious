import GameView from "../views/gameView.jsx";
import promiseNoData from "../views/promiseNoData.jsx";
import {retreivePracticeQuizQuestions,retreiveSeasonQuizQuestions} from "../quizSource.jsx";
import resolvePromise from "../resolvePromise.jsx";

function SeasonPresenter(props) {

    const [promiseState,] = React.useState({});
    const [, setData] = React.useState({});
    const [, setError] = React.useState({});

    const [gameDone, setGameDone]           = React.useState(false);//Keeping track if the game is done for the view
    const [options, setOptions]             = React.useState([]);   //Used in view
    const [rightAnswer, setRightAnswer]     = React.useState(0);    //Used to check if right answer was chosen
    const [rightAnswers, setRightAnswers]   = React.useState(0);    //Used to present amount of right answers in game

    function setAndShuffleOptions(data) {
        
        let myOptions = [...data[props.model.currentQuestion].incorrect_answers, data[props.model.currentQuestion].correct_answer];

        myOptions.sort((a,b) => 0.5 - Math.random()); //Shuffle array of answer options

        let correctAnswerIndex = myOptions.findIndex((element)=>element===promiseState.data[props.model.currentQuestion].correct_answer);
        console.log( "Correct answer: "+promiseState.data[props.model.currentQuestion].correct_answer )
        
        setRightAnswer(correctAnswerIndex);
        setOptions(myOptions);
    }

    function optionClick(option) {
        let myRightAnswers = rightAnswers;
        if( option == rightAnswer )
            myRightAnswers += 1;
        if( props.model.currentQuestion === 4 ) {
            setGameDone(true);
            props.model.setRightAnswersInSeason(myRightAnswers, props.model.currentGame);
        }
        else
        {
            props.model.currentQuestion += 1;
            setAndShuffleOptions(promiseState.data);
        }
        setRightAnswers(myRightAnswers);
    }
    function backClick() {
        if( window.location.hash === "#QuickGame" ) {
            props.model.resetSeason();
            window.location.hash = "#HomeScreen";
        }
        else {
            props.model.nextGameInSeason();
            window.location.hash = "#Season";
        }
    }
    
    function launch() {
        let myPromise = retreiveSeasonQuizQuestions(props.model.currentGame);
        myPromise.then(success).catch(failure);

        promiseState.promise = myPromise;
        promiseState.data = null;
        promiseState.error = null;
        setData(null);

        props.model.currentQuestion = 0;
    }

    function success(data) {
        promiseState.data=data;
        
        setAndShuffleOptions(data);

        setData(data);
    }

    function failure(error) {
        console.log(error);
        promiseState.error=error;
        setError(error);
    }

    React.useEffect(launch,[])

    return promiseNoData(promiseState)||<GameView games={promiseState.data}
                        options={options}
                        currentQuestion={props.model.currentQuestion}
                        currentGame={props.model.currentGame}
                        optionClick={optionClick}
                        gameDone={gameDone}
                        backClick={backClick}
                        rightAnswers={rightAnswers}
                        answers={props.model.answers}/>
}

export default SeasonPresenter;