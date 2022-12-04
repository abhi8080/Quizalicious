import './loginView.css';

function LoginView(props) {
    return  <div className="loginBoxWrapper">
                <img src="Quizalicious logo.svg" className="image blob"/>
                <div id = "error" ></div>
                <div className="loginBox">
                    <form>
                    <label htmlFor="email">Email address:</label><br/>
                    <input type = "email" placeholder = "" id="email"></input>
                    <label htmlFor="password">Password:</label><br/>
                    <input type = "password" placeholder = "" id="password"></input>
                    <a href="#CreateAccount">Create a new account</a>
                    
                    </form>
                    <button  onClick={props.onUserLogIn}>Log in</button>
                </div>
            </div>;
}

export default LoginView;