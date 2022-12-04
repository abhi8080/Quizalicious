import NotLoggedInView from '../views/notLoggedInView.jsx';

function NotLoggedIn(props) {
    function goToLogin() {
        window.location.hash="#Login";
    }

    return <NotLoggedInView goToLogin={goToLogin}/>;
}

export default NotLoggedIn;