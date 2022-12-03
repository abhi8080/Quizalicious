import GameView from "../views/gameView.jsx";
import promiseNoData from "../views/promiseNoData.jsx";
import {retreivePracticeQuizQuestions,retreiveSeasonQuizQuestions} from "../quizSource.jsx";
import resolvePromise from "../resolvePromise.jsx";
import React from "react";

function SeasonPresenter(props) {

    const [,updateState] = React.useState();

    const [promiseState,setPromiseState]    = React.useState({});
    const [data, setData]                   = React.useState(null);     //API data
    const [error, setError]                 = React.useState(null);     //API error

    const [currentQuestion, setCurrentQuestion] = React.useState(0);        //Current question
    const [gameDone, setGameDone]               = React.useState(false);    //Keeping track if the game is done for the view
    const [rightAnswers, setRightAnswers]       = React.useState(0);        //Used to present amount of right answers in game

    const [showWrong, setShowWrong]             = React.useState(false);
    const [showRight, setShowRight]             = React.useState(false);
    const [showTimeout, setShowTimeout]         = React.useState(false);

    const [exiting, setExiting]                 = React.useState(false); //For exiting animation

    function timeout() {
        console.log("timeout!");
        if(!exiting) {
            setShowTimeout(true);
            if( currentQuestion === 4 )
                setGameDone(true);
            else
                setCurrentQuestion(currentQuestion+1);
        }
    }

    function optionClick(option) {
        if( option === data[currentQuestion].correct_answer ){
            setRightAnswers(rightAnswers+1);
            setShowRight(true);
        }
        else {
            setShowWrong(true);
        }

        if( currentQuestion === 4 )
            setGameDone(true);
        else
            setCurrentQuestion(currentQuestion+1);
    }

    

    function backClick() {
        if( props.model.quickGameMode ) {
            setTimeout(()=>{
                props.model.resetSeason();
                window.location.hash = "#HomeScreen";
            },1000)
            setExiting(true);
        }
        else {
            setTimeout(()=>{
                props.model.setGameScore(rightAnswers);
            props.model.nextGame();
            window.location.hash = "#Season";
            },1000)
            setExiting(true);
        }
    }
    React.useEffect( ()=>{
        if( showWrong ) {
            setTimeout(()=>{setShowWrong(false)},1000)
        }
    },[showWrong]
    )

    React.useEffect( ()=>{
        if( showRight ) {
            setTimeout(()=>{setShowRight(false)},1000)
        }
    },[showRight]
    )

    React.useEffect( ()=>{
        if( showTimeout ) {
            setTimeout(()=>{setShowTimeout(false)},1000)
        }
    },[showTimeout])
    
    React.useEffect(()=>{
        let myPromiseState = {};
        function promiseResolved() {
            setData(myPromiseState["data"]);
            setError(myPromiseState["error"]);
            setPromiseState(myPromiseState);
        }
        if( props.model.quickGameMode )
            resolvePromise(retreivePracticeQuizQuestions( props.model.quickGameCategory, props.model.quickGameDifficulty),myPromiseState, promiseResolved);
        else
            resolvePromise(retreiveSeasonQuizQuestions(props.model.currentGame),myPromiseState, promiseResolved);
    },[]);

    React.useEffect(()=>{
        if(data) {
            data.forEach((question)=>{
                let options = [...question.incorrect_answers, question.correct_answer];
                
                options.sort((a,b) => 0.5 - Math.random()); //Shuffle array of answer options
                question.options=options; //Set randomized options in data for the view
            });
            updateState({});

        }
    },[data]);

    React.useEffect(()=>{
        if(gameDone)
            props.model.setGameScore(rightAnswers);
    },[gameDone])

    React.useEffect(()=>{
        //if(data)
            //console.log( "Correct answer: "+data[currentQuestion].correct_answer );
    },[currentQuestion, data])

    if( props.model.currentUser )
        return promiseNoData(promiseState)||<GameView   timeout={timeout}
                                                        questions={data}
                                                        currentQuestion={currentQuestion}
                                                        gameDone={gameDone}
                                                        error={error}
                                                        rightAnswers={rightAnswers}
                                                        showWrong={showWrong}
                                                        showRight={showRight}
                                                        showTimeout={showTimeout}
                                                        exiting={exiting}
                                                        optionClick={optionClick}
                                                        backClick={backClick}/>
    else
        return <div><h1>No user logged in</h1><button onClick={()=>{window.location.hash="#Login"}}>Press here to log in</button></div>
}

export default SeasonPresenter;