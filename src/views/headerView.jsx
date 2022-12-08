import './headerView.css';
import ProfileMenuView from "../views/profileMenuView.jsx";

function HeaderView(props) {

    return <header>
        <div className="headerWidthRestricted">
            <button className="homeButton" onClick={props.homeButtonPress}><img src="Quizalicious logo full dark theme.png"></img></button>
            <div className="profile button" onClick={props.profilePicClick}>
                <div className={"triangle "+((props.profileMenuOpen)&&("rotate90"))}></div>
                <img className="profile" src={props.photoURL||"./loid.jpg"} alt="" />
            </div>
            {props.children}
        </div>
    </header>;
}

export default HeaderView;