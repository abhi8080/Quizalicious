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
    return <div className="profileView">
        <span>
        <span className="profileInfo">
            <img className="profilePic" src="./loid.jpg" alt="" />
            <br></br>
            {/*props.usersUsername*/}
            <br></br>
            Level 1337 
            <br></br>
            9001 seasons played
           
        </span>
        
        <table className="seasons">
            <caption>Last 5 seasons</caption>
            <thead>
                <tr>
                    <th>Season</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.displaySeasons}</td>
                    <td>{props.seasonCorrectAnswers}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasons}</td>
                    <td>{props.seasonCorrectAnswers}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasons}</td>
                    <td>{props.seasonCorrectAnswers}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasons}</td>
                    <td>{props.seasonCorrectAnswers}</td>
                </tr>
                <tr>
                    <td>{props.displaySeasons}</td>
                    <td>{props.seasonCorrectAnswers}</td>
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