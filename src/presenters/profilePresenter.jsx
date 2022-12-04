import ProfileView from "../views/profileView.jsx";
import NotLoggedIn from "./notLoggedInPresenter.jsx";

function Profile(props) {
    if( !props.model.currentUser )
        return <NotLoggedIn/>;
        
    return <ProfileView />
}

export default Profile;