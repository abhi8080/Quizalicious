import HomeScreenView from "../views/homeScreenView.jsx";

function HomeScreen(props) {
    function newQuickGame() {
        window.location.hash = "#QuickGame";
    }

    function newSeason() {
        window.location.hash = "#Season";
    }

    function showHighscores() {
        window.location.hash = "#Highscores";
    }

    return <HomeScreenView newSeason={newSeason} newQuickGame={newQuickGame} showHighscores={showHighscores}/>
}

export default HomeScreen;