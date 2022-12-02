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

    function optionClick(option) {
        if( option === data[currentQuestion].correct_answer ){
            setRightAnswers(rightAnswers+1);
        }

        if( currentQuestion === 4 )
            setGameDone(true);
        else
            setCurrentQuestion(currentQuestion+1);
    }

    function backClick() {
        if( window.location.hash === "#QuickGame" ) {
            props.model.resetSeason();
            window.location.hash = "#HomeScreen";
        }
        else {
            props.model.setGameScore(rightAnswers);
            props.model.nextGame();
            window.location.hash = "#Season";
        }
    }
    
    React.useEffect(()=>{
        let myPromiseState = {};
        function promiseResolved() {
            setData(myPromiseState["data"]);
            setError(myPromiseState["error"]);
            setPromiseState(myPromiseState);
        }
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
            console.log(data);
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

    return promiseNoData(promiseState)||<GameView   questions={data}
                                                    currentQuestion={currentQuestion}
                                                    gameDone={gameDone}
                                                    error={error}
                                                    rightAnswers={rightAnswers}
                                                    optionClick={optionClick}
                                                    backClick={backClick}/>
}

export default SeasonPresenter;