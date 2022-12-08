import HomeScreenView from "../views/homeScreenView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";

function HomeScreen(props) {
    const [didClick, setDidClick] = React.useState(false);

    function newQuickGame() {
        setDidClick(true);
        setTimeout(()=>{
            props.model.quickGameMode = true;
            window.location.hash = "#QuickGame";
        },800)
    }

    function newSeason() {
        setDidClick(true);
        setTimeout(()=>{
            window.location.hash = "#Season";
            props.model.resetSeason();
            props.model.quickGameMode = false;
        },800)
    }

    function showHighscores() {
        setDidClick(true);
        setTimeout(()=>{
            window.location.hash = "#Highscore";
        },800)
    }

    if(!props.model.currentUser)
        return <NotLoggedIn/>;
    
    return <HomeScreenView didClick={didClick} newSeason={newSeason} newQuickGame={newQuickGame} showHighscores={showHighscores}/>
}

export default HomeScreen;