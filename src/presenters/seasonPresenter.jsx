import SeasonView from "../views/seasonView.jsx";



function SeasonPresenter(props) {
    const [,update] = React.useState({});
    const [,setCurrentGame] = React.useState(0);
    let gameList = [
        { name: "Easy game 1", difficulty: "easy" },
        { name: "Easy game 2", difficulty: "easy" },
        { name: "Medium game 3", difficulty: "medium" },
        { name: "Medium game 4", difficulty: "medium" },
        { name: "Hard game 5", difficulty: "hard" },
    ]

    function backClick() {
        window.location.hash ="#HomeScreen";
    }

    function resetSeason() {
        props.model.resetSeason();
        setCurrentGame(0);
    }

    function gameClick(number) {
        props.model.setCurrentGame(number);
        window.location.hash = "#Game";
    }

    function updateFromModel(payload) {
        if( payload["currentGame"] !== undefined ) {
            setCurrentGame(payload["currentGame"]);
            update({});
        }
    }

    React.useEffect(()=>{
        props.model.addObserver(updateFromModel);
        return ()=>{props.model.removeObserver(updateFromModel);}
    }, []);

    if( props.model.currentUser )
        return <SeasonView  currentGame={props.model.currentGame}
                            seasonCorrectAnswers={props.model.getSeasonScore()}
                            gameList={gameList}
                            backClick={backClick}
                            gameClick={gameClick}
                            resetSeason={resetSeason}/>;
    else
        return <div><h1>No user logged in</h1><button onClick={()=>{window.location.hash="#Login"}}>Press here to log in</button></div>
}

export default SeasonPresenter;