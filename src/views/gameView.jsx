import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function GameView(props) {
    function game(theGame) {
        return <div key={theGame.question}>
            <div class="countDownTimer">
                <CountdownCircleTimer size={100}
                    isPlaying
                    duration={10}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    >     
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
            <h1>{theGame.category} question {props.currentGame+1}/5</h1>
            <div class="questionText">{theGame.question}</div>
            <div class="butttonWrapper">
                <button onClick={()=>props.optionClick(1)}>{theGame.options[0]}</button>
                <button onClick={()=>props.optionClick(2)}>{theGame.options[1]}</button>
                <button onClick={()=>props.optionClick(3)}>{theGame.options[2]}</button>
                <button onClick={()=>props.optionClick(4)}>{theGame.options[3]}</button>
            </div>
        </div>;
    }

    function answersMap(theAnswer) {
        return <span>{theAnswer}</span>
    }

    function computeNumMatches(answers,rightAnswers) {
        let counter = 0;
        for (let i = 0; i < answers.length; i++)
            if( answers[i] === rightAnswers[i] )
                counter++;
        return <span>{counter}</span>
    }

    function gameDone() {
        return <div>
                    <img src="Quizalicious logo.svg" className="image blob"/>
                    <h1>Game done!</h1>
                    Your answers: <code>{props.answers.map(answersMap)}</code><br/>
                    Correct answers: <code>{props.rightAnswers.map(answersMap)}</code><br/>
                    You got {computeNumMatches(props.answers,props.rightAnswers)} right.<br/>
                    <button onClick={props.backClick}>Back</button>
                </div>
    }

    return  <div class="gameView">
                {(!props.gameDone)&&game(props.games[props.currentGame])}
                {(props.gameDone)&&gameDone()}
            </div>;
}

export default GameView;