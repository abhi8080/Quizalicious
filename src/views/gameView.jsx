import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './gameView.css';

function GameView(props) {
    function presentQuestion(question) {

        let duration = 10;
        if( question.difficulty==="easy")
            duration = 14;
        else if( question.difficulty==="medium")
            duration = 18;
        else if( question.difficulty==="hard")
            duration = 20;

        function option(text) {
            return <button onClick={()=>props.optionClick(text)} key={text} dangerouslySetInnerHTML={{__html: text}}></button>
        }
        if( !question.options )
        return <span>Wait!</span>;
        return <div className="question" key={question.question}>
            <div className="countDownTimer">
                <CountdownCircleTimer size={100}
                    isPlaying
                    duration={duration}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={()=>props.timeout()}
                    >     
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
                <h4>Category: <span className="category">{question.category}</span></h4>
                <span className="number"> question:</span><span className="number value">{props.currentQuestion+1}/5</span>
                <span>Difficulty:</span><span className={"difficulty "+question.difficulty}>{question.difficulty}</span>
            <div className="wrapper">
                <div className="text" dangerouslySetInnerHTML={{__html: question.question}}></div>
                <div className="buttonWrapper">
                    {question.options.map(option)}
                </div>
            </div>
                
        </div>;
    }

    function gameDone() {
        return <div>
                    <img src="Quizalicious logo.svg" className="image blob"/>
                    <h1>Game done!</h1>
                    <div className="result">You got {props.rightAnswers} right.</div>
                    <button onClick={props.backClick}>Back</button>
                </div>
    }

    return  <div className={"gameView appear "+(props.exiting&&"implode")}>
                {props.showWrong&&(<img src="./wrong.gif" className="wrong show"/>)}
                <div className={"right "+(props.showRight&&"show")}>Right answer!</div>
                <div className={"timeout "+(props.showTimeout&&"show")}>You're too slow!</div>
                {props.gameDone?gameDone():presentQuestion(props.questions[props.currentQuestion])}
            </div>;
}

export default GameView;