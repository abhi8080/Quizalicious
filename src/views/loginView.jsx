function LoginView(props) {
    return <div class="loginBox">
        <img src="Quizalicious logo.svg" className="image blob"/>
            <form>
                <input  placeholder = "Email"></input>
               <div><input  placeholder = "Password"></input></div>
               <a href="#CreateAccount">Create a new account</a>
            </form>
            <button  onClick={props.onUserLogIn}>Log in</button>
    </div>;



// function loginError(){
//     props.error
// }

    // function loginSuccess(){
    //     props.success
    // }
}

export default LoginView;