import HomeScreenView from "../views/homeScreenView.jsx";

function HomeScreen(props) {
    function newQuickGame() {
        console.log("new quickgame");
    }

    function newSeason() {
        console.log("new season");
    }

    function showHighscores() {
        console.log("Show highscores");
    }

    return <HomeScreenView newSeason={newSeason} newQuickGame={newQuickGame} showHighscores={showHighscores}/>
}

export default HomeScreen;