import ProfileView from "../views/profileView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import React from "react";

function Profile(props) {
    /*
    const [, copyUser] = React.useState(props.model.currentUser);

    function observerACB() {    // no need for payload
        copyUser(props.model.currentUser);    // when notified, update state with current value
        
    }
    */



    if( !props.model.currentUser )
        return <NotLoggedIn/>;
        
    if(props.model.currentUser.displayName === null) { //För att kolla att username prop fungerar
        return <ProfileView 
                            usersUsernamer="Username not found"
                            displaySeasons={props.model.setLast5Seasons()}
                            seasonCorrectAnswers={props.model.getSeasonScore()} />
    }

    function getLast5Seasons() {

    }

    function userLevel() {

    }

    function seasonsPlayed() {
        
    }

  //  React.useEffect(wasCreatedACB, []);

    /*
        ---TODO LIST---
        profile info:
            use prop for current logged in user ***DONE***
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
        
    return <ProfileView //usersUsername={loggedInUser}
                        usersUsername={props.model.currentUser.displayName}
                        //usersUsername={props.model.setCurrentUser()}
                        //last5Seasons={props.model.setLast5Seasons()}
                        dateDebugger={console.log(props.model.last5Seasons.at(0).date)}
                        scoreDebugger={console.log(props.model.last5Seasons.at(0).score)}
                        seasonsDebugger={console.log(props.model.last5Seasons)}
                        consoleDebugger={console.log(props.model.currentUser)}

                        displaySeasonDate1={props.model.last5Seasons.at(0).date}
                        displaySeasonDate2={props.model.last5Seasons.at(1).date}
                        displaySeasonDate3={props.model.last5Seasons.at(2).date}
                        displaySeasonDate4={props.model.last5Seasons.at(3).date}
                        displaySeasonDate5={props.model.last5Seasons.at(4).date} 

                        

                        displaySeasonScore1={props.model.last5Seasons.at(0).score}
                        displaySeasonScore2={props.model.last5Seasons.at(1).score}
                        displaySeasonScore3={props.model.last5Seasons.at(2).score}
                        displaySeasonScore4={props.model.last5Seasons.at(3).score}
                        displaySeasonScore5={props.model.last5Seasons.at(4).score} 
                       
                        displayPhoto={props.model.currentUser.photoURL}
                        displaySeasonsDate={props.model.last5Seasons.date}
                        displaySeasonsScore={props.model.last5Seasons.score}
                        seasonCorrectAnswers={props.model.getSeasonScore()} />
}

export default Profile;