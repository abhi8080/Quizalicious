import './homeScreenView.css';

function HomeScreenView(props) {
    return  <div className={"homeScreen appear "+(props.didClick&&"implode")}>
                <img src="Quizalicious logo.svg" className="logo" alt="" />

                <h1>Welcome to Quizalicious!</h1>
                <img src="Quizalicious logo.svg" className="vibrate-1 smallLogo" alt="" /><span className="menuTitle pulsate-bck">Game menu</span><img src="Quizalicious logo.svg" className="vibrate-1 smallLogo" alt="" />
                <div id="buttonWrapper">
                    <button className="homeScreen scale-in-center gelatine" onClick={props.newSeason}>New Season</button>
                    <button className="homeScreen scale-in-center gelatine" onClick={props.newQuickGame}>New quick game</button>
                    <button className="homeScreen scale-in-center gelatine" onClick={props.showHighscores}>Show highscores</button>
                </div>
            </div>;
}

export default HomeScreenView;