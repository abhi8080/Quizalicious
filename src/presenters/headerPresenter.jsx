import HeaderView from "../views/headerView.jsx";
import ProfileMenuView from "../views/profileMenuView.jsx";

function HeaderPresenter(props) {

    const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);

    function profileClick() {
        console.log("profile click!");
        setProfileMenuOpen(!profileMenuOpen);
    }

    function logOut() {
        console.log("Logout");
    }

    function yourSettings() {
        console.log("your settings");
    }

    function yourProfile() {
        console.log("your profile");
    }

    function homeButtonPress() {
        console.log("Home button press");
    }

    return <HeaderView  homeButtonPress={homeButtonPress}
                        profileClick={profileClick}
                        profileMenuOpen={profileMenuOpen}>
                        {profileMenuOpen&&<ProfileMenuView logOut={logOut} yourSettings={yourSettings} yourProfile={yourProfile}/>}
            </HeaderView>;
}

export default HeaderPresenter;