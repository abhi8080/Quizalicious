
function ProfileView(props) {

    /* 
        ---PROFILE TODO---
        2 Main div, within first div have 2 smaller divs
        in the smaller div to the left, show profile picture, name, level and played seasons
        in the smaller div to the right, show last 5 seasons with score, difficulty and time
        in the second larger div, show achievements
    */
    return <div className="profileView">
        <span>
        <span className="profileInfo">
            <img className="profilePic" src="./loid.jpg" alt="" />
            <br></br>
            Creamy Beaster 
            <br></br>
            Level 1337 
            <br></br>
            9001 seasons played
           
        </span>
        <span>
            <h2>Last 5 seasons</h2>
              
                <span className="seasonsProfile">Score</span>
                <span className="seasonsProfile">Difficulty</span>
                <span className="seasonsProfile">Time</span>
                <br></br>
                <span className="seasonsProfile">Over 9000</span>
                <span className="seasonsProfile">Hard</span>
                <span className="seasonsProfile">25 seconds</span>
                <br></br>
                <span className="seasonsProfile">Over 9000</span>
                <span className="seasonsProfile">Hard</span>
                <span className="seasonsProfile">25 seconds</span>
                <br></br>
                <span className="seasonsProfile">Over 9000</span>
                <span className="seasonsProfile">Hard</span>
                <span className="seasonsProfile">25 seconds</span>
                <br></br>
                <span className="seasonsProfile">Over 9000</span>
                <span className="seasonsProfile">Hard</span>
                <span className="seasonsProfile">25 seconds</span>
                <br></br>
                <span className="seasonsProfile">Over 9000</span>
                <span className="seasonsProfile">Hard</span>
                <span className="seasonsProfile">25 seconds</span>

                <h3>last 5 seasons above needs some obvious styling work</h3>
               
        </span>
        </span>
        <span>
            <h2>Achievements</h2>
            display achievements here
        </span>
    </div>
}

export default ProfileView;