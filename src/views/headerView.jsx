import './headerView.css';
import ProfileMenuView from "../views/profileMenuView.jsx";

function HeaderView(props) {

    return <header onClick={props.stopProp}>
        <div className="headerWidthRestricted">
            <button className="homeButton" onClick={props.homeButtonPress}><img src="Quizalicious logo full dark theme.png"></img></button>
            <div className="profile button" onClick={props.profileClick}>
                <div className="triangle"></div>
                <img className="profile" src="./loid.jpg" alt="" />
            </div>
            {props.children}
        </div>
    </header>;
}

export default HeaderView;