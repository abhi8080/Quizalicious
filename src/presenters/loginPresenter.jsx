import LoginView from "../views/loginView";

function Login(props) {


    // function handleErrorACB(){
    //     console.log("Error");
    // }

    function handleLoginACB(){
        console.log("Email checked") //event that validatates email in model
        console.log("Password OK") // event that validatates that the password is correct
        console.log("Log in successful") //If both emailValidation and passwordValidation passes it sends user to the home screen
    }

    // function handleEmailValidationACB(){
    //     console.log("Validation completed")
    // }

    // function handlePasswordValidationACB(){
    //     console.log("Validation OK")
    // }

    return <LoginView  onUserLogIn = {handleLoginACB}/>

}

export default Login;