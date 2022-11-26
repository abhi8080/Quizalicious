import ProfileMenuView from "../views/profileMenuView.jsx";

function HeaderView(props) {

    return <div class="header">
        <div className="headerWidthRestricted">
            <button class="homeButton" onClick={props.homeButtonPress}><img src="Quizalicious logo full dark theme.png"></img></button>
            <div class="profile button" onClick={props.profileClick}>
                <div className="triangle"></div>
                <img class="profile" src="./loid.jpg" alt="" />
            </div>
            {props.profileMenuOpen&&<ProfileMenuView logOut={props.logOut} yourSettings={props.yourSettings} yourProfile={props.yourProfile}/>}
        </div>
    </div>;
}

export default HeaderView;