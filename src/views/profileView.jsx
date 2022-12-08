import './profileView.css';
import '../index.css';

function ProfileView(props) {

    /* 
        ---PROFILE TODO---
        2 Main div, within first div have 2 smaller divs **DONE**
        in the smaller div to the left, show profile picture, name, level and played seasons **DONE**
        in the smaller div to the right, show last 5 seasons with season info and score **DONE**
        in the second larger div, show achievements
    */
    function renderSeasons(season){
        return <tr>
                <td>{season.date}</td>
                <td>{season.score}</td>
            </tr>;
        }
    
    return <div className="profileView appear">
        <span>
        <span className="profileInfo">
            <img className="profilePic" src={props.displayPhoto||"./loid.jpg"} alt="" />
            <br></br>
            {props.usersUsername}
            <br></br>
            9001 seasons played
           
        </span>
        <h2>Last 5 seasons</h2>
        <table className="seasons">
            
            <thead>
                <tr>
                    <th>Season</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {props.displaySeasons.map(renderSeasons)}
                </tbody>
            
        </table>
        
       
        </span>
        <span>
            <h2>Achievements</h2>
            display achievements here
            
        </span>
    </div>
}

export default ProfileView;