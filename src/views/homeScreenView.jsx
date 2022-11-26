function HomeScreenView(props) {
    return <div class="homeScreenView">
        <img src="Quizalicious logo.svg" class="logo" alt="" />
        <h1>Welcome to Quizalicious!</h1>
        <img src="Quizalicious logo.svg" class="vibrate-1 smallLogo" alt="" /><h2 class="gameMenu pulsate-bck">Game menu</h2><img src="Quizalicious logo.svg" class="vibrate-1 smallLogo" alt="" />
        <div id="buttonWrapper">
            <button class="homeScreen scale-in-center" onClick={props.newSeason}>New Season</button>
            <button class="homeScreen scale-in-center" onClick={props.newQuickGame}>New quick game</button>
            <button class="homeScreen scale-in-center" onClick={props.showHighscores}>Show highscores</button>
        </div>
    </div>;
}

export default HomeScreenView;