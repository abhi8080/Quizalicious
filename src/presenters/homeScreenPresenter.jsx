import HomeScreenView from "../views/homeScreenView.jsx";

function HomeScreen(props) {
    function newQuickGame() {
        console.log("new quickgame");
        window.location.hash = "#Quickgame";
    }

    function newSeason() {
        console.log("new season");
        window.location.hash = "#Season";
    }

    function showHighscores() {
        console.log("Show highscores");
        window.location.hash = "#Highscores";
    }

    return <HomeScreenView newSeason={newSeason} newQuickGame={newQuickGame} showHighscores={showHighscores}/>
}

export default HomeScreen;