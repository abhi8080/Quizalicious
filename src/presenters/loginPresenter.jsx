import LoginView from "../views/loginView";

function Login(props) {

    function handleLoginACB() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        try {
            props.model.signIn(email, password)
        } catch (error) {
            console.log(error)
        }
        if (props.model.currentUser != null) {
            window.location.hash = "#HomeScreen"
        }
       
    }


    return <LoginView onUserLogIn={handleLoginACB} />

}

export default Login;