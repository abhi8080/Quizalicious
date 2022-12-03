
function ProfileView(props) {

    /* 
        ---PROFILE TODO---
        2 Main div, within first div have 2 smaller divs
        in the smaller div to the left, show profile picture, name, level and played seasons
        in the smaller div to the right, show last 5 seasons with score, difficulty and time
        in the second larger div, show achievements
    */
    return <div className="profileView">
        <span className="profileInfo">
            <img className="profilePic" src="./loid.jpg" alt="" />
            <br></br>
            Creamy Beaster 
            <br></br>
            Level 1337 
            <br></br>
            9001 seasons played
           
        </span>
        <h1>In progress</h1>
        <h3>Profile details etc going to be displayed here</h3>
    </div>
}

export default ProfileView;