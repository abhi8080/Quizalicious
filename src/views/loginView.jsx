
import "./loginView.css";
import { Link } from "react-router-dom";


function LoginView(props) {
 
    return <div className="loginView">
        <img src=" Quizalicious logo.svg" className="blob" />
        <img src="./Bubo_small.png" className="bubo" alt="Bubo!" />
        <div>{errorHandling()}</div>
        <div className="loginBox">
            <form onSubmit={userLogInACB}>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="Email" onChange={userEmailACB}></input>
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="Password" onChange={userPasswordACB} ></input>
                <Link to={"/CreateAccount"}>Create a new account</Link>
                <button type="submit">Log in</button>
            </form>
            <img src="./Quizalicious logo full dark theme.png" className="quiza" alt="" />
        </div>
    </div>;

    function userEmailACB(event) {
        props.onUserEmail(event.target.value)
    }

    function userPasswordACB(event) {
        props.onUserPassword(event.target.value)
    }

    function userLogInACB(event){
        event.preventDefault()
        props.onUserLogIn()
    }

    function errorHandling() {
        if (!props.error.message)
            return;
        if (props.error.message.includes("password")) {
            return "Wrong password, try again";
        }

        if (props.error.message.includes("email")) {
            return "Wrong email, try again";
        }
    }
}

export default LoginView;