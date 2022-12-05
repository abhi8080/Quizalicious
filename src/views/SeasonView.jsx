import './seasonView.css';

function SeasonView(props) {

    function gameClickACB(index) {
        props.gameClick(index);
    }

    function gameCB(game, index) {
        let classes="game "+game.difficulty;
        if(props.currentGame===index) classes+= " gelatine"
        return <button className={classes}
                       key={game.name} onClick={()=>gameClickACB(index)}
                       disabled={props.currentGame!==index}>
                    {game.name}
                </button>;
    }

    let seasonDone = props.currentGame === props.gameList.length;

    function backWarningPopup() {
        return  <div className={"warningPopup warningShow "+(props.closingBackClickPleaseConfirm&&("hideWarning"))}>
                    <div className="warningIcon animateI">!</div>
                    <p>You will lose all your progress if you go back before finishing the season.</p> 
                    <button className="red" onClick={props.backClick}>Go back anyhow</button>
                    <button className="green" onClick={props.cancelBack}>Cancel</button>
                </div>
    }
    function resetWarningPopup() {
        return  <div className={"warningPopup warningShow "+(props.closingResetPleaseConfirm&&("hideWarning"))}>
                    <div className="warningIcon animateI">!</div>
                    <p>You will lose all your progress if you reset this season!</p> 
                    <button className="red" onClick={props.resetSeason}>Reset anyhow!</button>
                    <button className="green" onClick={props.cancelReset}>Cancel</button>
                </div>
    }
    return  <div className={"appear seasonView "+(props.gameClicked&&"implode")}>
                <img src="Quizalicious logo.svg" className="image blob"/>
                {seasonDone&&(<div><h1>Season done!</h1><span>{"You got the score "+props.seasonCorrectAnswers+" in this season"}</span></div>)}
                {(!seasonDone)&&(props.gameList.map(gameCB))}
                {(!seasonDone)&&(<span>Your current score {props.seasonCorrectAnswers}.</span>)}
                {(!seasonDone)&&(<button onClick={props.backClickConfirm} className="game" href="#HomeScreen">Back</button>)}
                {(seasonDone)&&(<button onClick={props.backClick} className="game" href="#HomeScreen">Back</button>)}
                <button onClick={props.resetConfirm} className="game">reset season</button>
                {props.backClickPleaseConfirm&&backWarningPopup()}
                {props.resetPleaseConfirm&&resetWarningPopup()}
            </div>;
}

export default SeasonView;