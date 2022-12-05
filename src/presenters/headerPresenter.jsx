import HeaderView from "../views/headerView.jsx";
import ProfileMenuView from "../views/profileMenuView.jsx";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

function HeaderPresenter(props) {

    const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
    const [hidingMenu, setHidingMenu] = React.useState(false); //For closing animation

    function profilePicClick(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();

        props.model.setProfileMenuOpen(!profileMenuOpen);

        console.log("yo");
        
    }
    
    function logOut() {
        
        signOut(auth).then(() => {
            window.location.hash="#Login";
            props.model.currentUser = undefined;
        }).catch((error) => {
            Alert("Error logging out");
        });
        props.model.setProfileMenuOpen(false);

    }

    function yourSettings() {
        props.model.setProfileMenuOpen(false);

    }

    function yourProfile() {
        window.location.hash="#Profile";
        props.model.setProfileMenuOpen(false);
    }

    function homeButtonPress() {
        window.location.hash="HomeScreen";
    }

    function stopProp(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    function modelUpdate(payload) {
        if(payload) {
            if(payload.profileMenuOpen !== undefined) {
                if(!payload.profileMenuOpen)
                    setHidingMenu(true);
                if(payload.profileMenuOpen)
                    setProfileMenuOpen(true);
            }
        }
    }

    React.useEffect(()=>{
        if(hidingMenu) {
            setTimeout(()=>{
                setProfileMenuOpen(false);
                setHidingMenu(false);
            },500)
        }
    },[hidingMenu]);

    React.useEffect(()=>{
        setProfileMenuOpen(props.model.profileMenuOpen);
        props.model.addObserver(modelUpdate);
        return ()=>{props.model.removeObserver(modelUpdate)}
    },[]);

    if( props.model.currentUser )
        return <HeaderView  user            ={props.model.currentUser}
                            homeButtonPress ={homeButtonPress}
                            profilePicClick ={profilePicClick}
                            profileMenuOpen ={props.model.profileMenuOpen}>
                            {profileMenuOpen&&(
                                <ProfileMenuView    stopProp    ={stopProp}
                                                    hidingMenu  ={hidingMenu}
                                                    user        ={props.model.currentUser}
                                                    logOut      ={logOut}
                                                    yourSettings={yourSettings}
                                                    yourProfile ={yourProfile}/>)}
                </HeaderView>;
}

export default HeaderPresenter;