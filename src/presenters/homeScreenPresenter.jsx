import HomeScreenView from "../views/homeScreenView.jsx";

function HomeScreen(props) {
    function newQuickGame() {
        props.model.quickGameMode = true;
        window.location.hash = "#QuickGame";
    }

    function newSeason() {
        window.location.hash = "#Season";
        props.model.resetSeason();
        props.model.quickGameMode = false;
    }

    function showHighscores() {
        window.location.hash = "#Highscores";
    }

    return <HomeScreenView newSeason={newSeason} newQuickGame={newQuickGame} showHighscores={showHighscores}/>
}

export default HomeScreen;