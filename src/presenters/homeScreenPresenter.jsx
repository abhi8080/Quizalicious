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

    if(props.model.currentUser)
        return <HomeScreenView newSeason={newSeason} newQuickGame={newQuickGame} showHighscores={showHighscores}/>
    else
        return <div><h1>No user logged in</h1><button onClick={()=>{window.location.hash="#Login"}}>Press here to log in</button></div>
}

export default HomeScreen;