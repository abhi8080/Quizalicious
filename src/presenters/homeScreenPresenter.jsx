import HomeScreenView from "../views/homeScreenView.jsx";

function HomeScreen(props) {
    const [didClick, setDidClick] = React.useState(false);

    function newQuickGame() {
        setDidClick(true);
        setTimeout(()=>{
            props.model.quickGameMode = true;
            window.location.hash = "#QuickGame";
        },1000)
    }

    function newSeason() {
        setDidClick(true);
        setTimeout(()=>{
            window.location.hash = "#Season";
            props.model.resetSeason();
            props.model.quickGameMode = false;
        },1000)
    }

    function showHighscores() {
        window.location.hash = "#Highscore";
    }

    if(props.model.currentUser)
        return <HomeScreenView didClick={didClick} newSeason={newSeason} newQuickGame={newQuickGame} showHighscores={showHighscores}/>
    else
        return <div><h1>No user logged in</h1><button onClick={()=>{window.location.hash="#Login"}}>Press here to log in</button></div>
}

export default HomeScreen;