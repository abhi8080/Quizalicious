import ProfileView from "../views/profileView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";

function Profile(props) {
    if( !props.model.currentUser )
        return <NotLoggedIn/>;

    function loggedInUser(){

    }

    function userLevel() {

    }

    function seasonsPlayed() {

    }

    /*
        ---TODO LIST---
        profile info:
            use prop for current logged in user
            use prop for level
            use prop for seasons played

        last 5 seasons:
            score for the last (current) season played ***DONE***
            score for the previous 4 seasons

        Achievements:
            Display unlocked achievements kinda like we did dishes in TW ???
            Display locked achievements or not?
            Achievement progress?


    */
        
    return <ProfileView 
                        seasonCorrectAnswers={props.model.getSeasonScore()} />
}

export default Profile;