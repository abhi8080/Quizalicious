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

    return <div className="seasonView">
        <img src="Quizalicious logo.svg" className="image blob"/>
        {props.currentGame===5&&(<div><h1>Season done!</h1><span>{"You got the score "+props.seasonCorrectAnswers+" in this season"}</span></div>)}
        {props.currentGame!==5&&(props.games.map(gameCB))}
        {props.currentGame!==5&&(<span>Your current score {props.seasonCorrectAnswers}.</span>)}
        <button onClick={props.backClick} className="game" href="#HomeScreen">Back</button>
        <button onClick={props.resetSeason} className="game">reset season</button>
    </div>;
}

export default SeasonView;