import ProfileView from "../views/profileView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";
import React from "react";

function Profile(props) {

    if( !props.model.currentUser )
        return <NotLoggedIn/>;

    return <ProfileView 
                        usersUsername={props.model.currentUser.displayName}
                        displayPhoto={props.model.currentUser.photoURL} 
                        displaySeasons={props.model.last5Seasons} />
}

export default Profile;