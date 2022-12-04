import './highscoreView.css';

function HighscoreView(props) {
    return <div>
        {Player(props.highScoreList)}
    </div>;
}

function Player(data) {
    return (

        <>
            {
                data.map((value, index) => (
                    <div style= {{backgroundColor: 'blue', margin: '10px'}}key={index}>
                        <span style= {{margin: '10px'}}>{value.username}</span>
                        <span style= {{margin: '10px'}}>{value.score}</span>
                        <span style= {{margin: '10px'}}>{value.date}</span>
                    </div>
                    )
                )
            }
        </>

        
    )

}

export default HighscoreView;