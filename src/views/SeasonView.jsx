function SeasonView(props) {

    function gameClickACB(index) {
        props.gameClick(index);
    }

    function gameCB(game, index) {
        return <button className={"game "+game.difficulty}
                       key={game.name} onClick={()=>gameClickACB(index)}
                       disabled={props.currentGame!==index}>
                    {game.name}
                </button>;
    }

    let seasonDone = props.currentGame === props.gameList.length;

    return <div className="seasonView">
        <img src="Quizalicious logo.svg" className="image blob"/>
        {seasonDone&&(<div><h1>Season done!</h1><span>{"You got the score "+props.seasonCorrectAnswers+" in this season"}</span></div>)}
        {(!seasonDone)&&(props.gameList.map(gameCB))}
        {(!seasonDone)&&(<span>Your current score {props.seasonCorrectAnswers}.</span>)}
        <button onClick={props.backClick} className="game" href="#HomeScreen">Back</button>
        <button onClick={props.resetSeason} className="game">reset season</button>
    </div>;
}

export default SeasonView;