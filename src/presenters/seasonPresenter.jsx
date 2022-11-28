import SeasonView from "../views/SeasonView.jsx";


function backClick() {
    window.location.hash ="#HomeScreen";
}

function gameClick() {
    window.location.hash = "#Game";
    props.model.currentGame = 1;
}

function SeasonPresenter(props) {
    return <SeasonView games={props.model.currentSeasonGames} backClick={backClick} gameClick={gameClick}/>;
}

export default SeasonPresenter;