function SeasonView(props) {

    function gameCB(game) {
        return <button class={"game "+game.difficulty} key={game.name} onClick={props.gameClick}>{game.name}</button>;
    }

    return <div class="seasonView">
        <img src="Quizalicious logo.svg" className="image blob"/>
        {props.games.map(gameCB)}
        <button onClick={props.backClick} class="game" href="#HomeScreen">Back</button>
    </div>;
}

export default SeasonView;