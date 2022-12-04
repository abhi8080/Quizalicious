import HighscoreView from "../views/highscoreView.jsx";

function Highscore(props) {
    const [highScoreList, setHighScoreList] = React.useState(props.model.highScoreList);

    React.useEffect(wasCreatedACB, []);

    function observerACB(){ setHighScoreList(props.model.highScoreList);}

    function wasCreatedACB(){  
        props.model.addObserver(observerACB);                               
        function isTakenDownACB(){ props.model.removeObserver(observerACB);} 
        return isTakenDownACB;
    }


    function sort(highScoreList) {
        return highScoreList.sort((a,b) => {
            if(a.score === b.score) {
                return b.score - a.score;
            }
            else {
                return b.score - a.score;
            }
        }).slice(0,10);
    }
    return <HighscoreView highScoreList={sort(highScoreList)}/>
}

export default Highscore;