function LoginView(props) {
    return <div>
        
        <div>
        <img src="Quizalicious logo.svg" className="image"/>
            <form>
                <input  placeholder = "Email"></input>
               <div><input  placeholder = "Password"></input></div>
               <a href="#CreateAccount">Create a new account</a>
            </form>
            <button  onClick={props.onUserLogIn}>Log in</button>

        </div>
    </div>;



// function loginError(){
//     props.error
// }

    // function loginSuccess(){
    //     props.success
    // }
}

export default LoginView;