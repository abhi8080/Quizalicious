function HomeScreenView(props) {
    return <div className="homeScreenView">
        <img src="Quizalicious logo.svg" className="logo" alt="" />
        <h1>Welcome to Quizalicious!</h1>
        <img src="Quizalicious logo.svg" className="vibrate-1 smallLogo" alt="" /><h2 className="gameMenu pulsate-bck">Game menu</h2><img src="Quizalicious logo.svg" className="vibrate-1 smallLogo" alt="" />
        <div id="buttonWrapper">
            <button className="homeScreen scale-in-center" onClick={props.newSeason}>New Season</button>
            <button className="homeScreen scale-in-center" onClick={props.newQuickGame}>New quick game</button>
            <button className="homeScreen scale-in-center" onClick={props.showHighscores}>Show highscores</button>
        </div>
    </div>;
}

export default HomeScreenView;