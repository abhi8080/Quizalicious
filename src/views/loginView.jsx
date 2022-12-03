function LoginView(props) {


    return <div className="loginBox">
    <img src="Quizalicious logo.svg" className="image blob"/>
        <form>
        <input type = "email" placeholder = "Email" id="email"></input> 
        <div><input type = "password" placeholder = "Password" id="password"></input></div>
        <div id = "error" ></div>
        <a href="#CreateAccount">Create a new account</a>
        
        </form>
        <button  onClick={props.onUserLogIn}>Log in</button>
</div>;

}

export default LoginView;