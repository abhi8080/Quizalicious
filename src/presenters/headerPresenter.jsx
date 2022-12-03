import HeaderView from "../views/headerView.jsx";
import ProfileMenuView from "../views/profileMenuView.jsx";

function HeaderPresenter(props) {

    const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);

    function profileClick(event) {
        setProfileMenuOpen(!profileMenuOpen);
        props.model.setProfileMenuOpen(true);
    }

    function logOut() {
        window.location.hash="#Login";
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

    return <HeaderView  stopProp={stopProp}
                        homeButtonPress={homeButtonPress}
                        profileClick={profileClick}
                        profileMenuOpen={profileMenuOpen}>
                        {profileMenuOpen&&<ProfileMenuView logOut={logOut} yourSettings={yourSettings} yourProfile={yourProfile}/>}
            </HeaderView>;
}

export default HeaderPresenter;