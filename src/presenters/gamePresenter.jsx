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
    
    React.useEffect(()=>{
        let myPromiseState = {};
        function promiseResolved() {
            setData(myPromiseState["data"]);
            setError(myPromiseState["error"]);
            setPromiseState(myPromiseState);
        }
        if( props.model.quickGameMode )
            resolvePromise(retreivePracticeQuizQuestions("", ""),myPromiseState, promiseResolved);
        else
            resolvePromise(retreiveSeasonQuizQuestions(props.model.currentGame),myPromiseState, promiseResolved);
    },[]);

    React.useEffect(()=>{
        if(data) {
            data.forEach((question)=>{
                console.log( question );

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
        return promiseNoData(promiseState)||<GameView   questions={data}
                                                        currentQuestion={currentQuestion}
                                                        gameDone={gameDone}
                                                        error={error}
                                                        rightAnswers={rightAnswers}
                                                        showWrong={showWrong}
                                                        showRight={showRight}
                                                        optionClick={optionClick}
                                                        backClick={backClick}/>
    else
        return <div><h1>No user logged in</h1><button onClick={()=>{window.location.hash="#Login"}}>Press here to log in</button></div>
}

export default SeasonPresenter;