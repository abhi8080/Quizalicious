import GameView from "../views/gameView.jsx";
import promiseNoData from "../views/promiseNoData.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import {retreivePracticeQuizQuestions,retreiveSeasonQuizQuestions} from "../quizSource.jsx";
import resolvePromise from "../resolvePromise.jsx";
import React from "react";

import confetti from 'canvas-confetti';

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

    function launchConfetti() {
        var canvas = document.getElementById('my-canvas');

        var myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
        });
        myConfetti({
            particleCount: 100,
            spread: 160
            // any other options from the global
            // confetti function
            });
    }
    function launchConfettiRandom() {
        var canvas = document.getElementById('my-canvas');

        var myConfetti = confetti.create(canvas, {
            resize: true,
            useWorker: true
        });
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }
            
        myConfetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
        });
    }

    function optionClick(option) {
        
        if( option === data[currentQuestion].correct_answer ){
            setRightAnswers(rightAnswers+1);
            setShowRight(true);
            launchConfetti();
        }
        else {
            setShowWrong(true);
        }

        if( currentQuestion === 4 ) {
            setGameDone(true);
        }
        else
            setCurrentQuestion(currentQuestion+1);
    }

    

    function backClick() {
        if( props.model.quickGameMode ) {
            setTimeout(()=>{
                props.model.resetSeason();
                window.location.hash = "#HomeScreen";
            },800)
            setExiting(true);
        }
        else {
            setTimeout(()=>{
                props.model.setGameScore(rightAnswers);
            props.model.nextGame();
            window.location.hash = "#Season";
            },800)
            setExiting(true);
        }
    }
    React.useEffect( ()=>{
        if( showWrong ) {
            setTimeout(()=>{setShowWrong(false)},1100)
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
            setTimeout(()=>{setShowTimeout(false)},1200)
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
        if(gameDone) {
            props.model.setGameScore(rightAnswers);
            if( props.model.currentGame === 4 ) 
                props.model.setScore(props.model.getSeasonScore());
            setTimeout(()=>{
                launchConfettiRandom();
            },1000);
            setTimeout(()=>{
                launchConfettiRandom();
            },1400);
            setTimeout(()=>{
                launchConfettiRandom();
            },1800);
        }
    },[gameDone])

    React.useEffect(()=>{
        // if(data)
        //     console.log( "Correct answer: "+data[currentQuestion].correct_answer );
    },[currentQuestion, data])

    if( !props.model.currentUser )
        return <NotLoggedIn/>;
        
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
}

export default SeasonPresenter;