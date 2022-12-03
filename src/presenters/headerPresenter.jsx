import HeaderView from "../views/headerView.jsx";
import ProfileMenuView from "../views/profileMenuView.jsx";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

function HeaderPresenter(props) {

    const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);

    function profileClick(event) {
        setProfileMenuOpen(!profileMenuOpen);
        props.model.setProfileMenuOpen(true);
    }
    
    function logOut() {
        
        signOut(auth).then(() => {
            window.location.hash="#Login";
            props.model.currentUser = undefined;
        }).catch((error) => {
            Alert("Error logging out");
        });
        setProfileMenuOpen(false);
    }

    function yourSettings() {
        setProfileMenuOpen(false);
    }

    function yourProfile() {
        window.location.hash="#Profile";
        setProfileMenuOpen(false);
    }

    function homeButtonPress() {
        window.location.hash="HomeScreen";
    }

    function stopProp(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    function modelUpdate() {
        setProfileMenuOpen(props.model.profileMenuOpen);
    }

    function created() {
        props.model.addObserver(modelUpdate);
    }

    React.useEffect(created,[]);

    if( props.model.currentUser )
        return <HeaderView  stopProp={stopProp}
                            homeButtonPress={homeButtonPress}
                            profileClick={profileClick}
                            profileMenuOpen={profileMenuOpen}>
                            {profileMenuOpen&&<ProfileMenuView logOut={logOut} yourSettings={yourSettings} yourProfile={yourProfile}/>}
                </HeaderView>;
}

export default HeaderPresenter;