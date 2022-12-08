import ProfileView from "../views/profileView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import React from "react";

function Profile(props) {
    const [backClicked, setBackClicked] = React.useState(false);

    function backClick() {
        setBackClicked(true);
        setTimeout(()=>{
            window.location.hash="#HomeScreen";
        }, 800);
    }

    if( !props.model.currentUser )
        return <NotLoggedIn/>;

    return <ProfileView backClicked={backClicked}
                        backClick={backClick}
                        usersUsername={props.model.currentUser.displayName}
                        displayPhoto={props.model.currentUser.photoURL} 
                        displaySeasons={props.model.last5Seasons} />
}

export default Profile;