import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function GameView(props) {
    function game(theGame) {
        function option(text, index) {
            return <button onClick={()=>props.optionClick(index)} key={text}>{text}</button>
        }
        return <div key={theGame.question}>
            <div className="countDownTimer">
                <CountdownCircleTimer size={100}
                    isPlaying
                    duration={10}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={()=>props.optionClick(5)}
                    >     
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
            <h1>{theGame.category} question {props.currentQuestion+1}/5</h1>
            <button className={"questionDifficulty game "+theGame.difficulty}>{theGame.difficulty}</button>
            <div className="questionText">{theGame.question}</div>
            <div className="butttonWrapper">
                {props.options.map(option)}
            </div>
        </div>;
    }

    function gameDone() {
        return <div>
                    <img src="Quizalicious logo.svg" className="image blob"/>
                    <h1>Game done!</h1>
                    You got {props.rightAnswers} right.<br/>
                    <button onClick={props.backClick}>Back</button>
                </div>
    }

    return  <div className="gameView">
                {(!props.gameDone)&&game(props.games[props.currentQuestion])}
                {(props.gameDone)&&gameDone()}
            </div>;
}

export default GameView;