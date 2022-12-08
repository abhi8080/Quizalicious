import NotLoggedInView from '../views/notLoggedInView.jsx';
import { useNavigate } from 'react-router-dom';

function NotLoggedIn(props) {
    let navigate = useNavigate();
    function goToLogin() {
        navigate("/Login");
    }

    return <NotLoggedInView goToLogin={goToLogin}/>;
}

export default NotLoggedIn;