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
    return <div className="profileView appear">
        <span>
        <span className="profileInfo">
            <img className="profilePic" src={props.displayPhoto||"./loid.jpg"} alt="" />
            <br></br>
            {props.usersUsername}
            {props.usersUsernamer}
            {props.consoleDebugger}
            {props.dateDebugger}
            {props.scoreDebugger}
            {props.seasonDebugger}
            <br></br>
            Level 1337 
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
                <tr>
                    <td>{props.displaySeasonDate1}</td>
                    <td>{props.displaySeasonScore1}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasonDate2}</td>
                    <td>{props.displaySeasonScore2}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasonDate3}</td>
                    <td>{props.displaySeasonScore3}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasonDate4}</td>
                    <td>{props.displaySeasonScore4}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasonDate5}</td>
                    <td>{props.displaySeasonScore5}</td>
                </tr>
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