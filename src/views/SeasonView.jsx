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

    function warningPopup() {
        return  <div className={"warningPopup warningShow "+(props.closingWarning&&("hideWarning"))}>
                    <div className="warningIcon animateI">!</div>
                    <p>You will lose all your progress if you go back before finishing the season.</p> 
                    <button onClick={props.backClick}>Go back anyhow</button>
                    <button onClick={props.cancelBack}>Cancel</button>
                </div>
    }
    return  <div className={"appear seasonView "+(props.gameClicked&&"implode")}>
                <img src="Quizalicious logo.svg" className="image blob"/>
                {seasonDone&&(<div><h1>Season done!</h1><span>{"You got the score "+props.seasonCorrectAnswers+" in this season"}</span></div>)}
                {(!seasonDone)&&(props.gameList.map(gameCB))}
                {(!seasonDone)&&(<span>Your current score {props.seasonCorrectAnswers}.</span>)}
                {(!seasonDone)&&(<button onClick={props.backClickConfirm} className="game" href="#HomeScreen">Back</button>)}
                {(seasonDone)&&(<button onClick={props.backClick} className="game" href="#HomeScreen">Back</button>)}
                <button onClick={props.resetSeason} className="game">reset season</button>
                {props.backClickPleaseConfirm&&warningPopup()}
            </div>;
}

export default SeasonView;