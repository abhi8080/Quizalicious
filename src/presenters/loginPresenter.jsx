import LoginView from "../views/loginView";
import React from "react";

function Login(props) {

    async function handleLoginACB() {

        var email = document.getElementById('email').value
        var password = document.getElementById('password').value


        try {
            await props.model.signIn(email, password)
        } catch (error) {
            var errorMessage = error.message;
            console.log(error.message)
            if (errorMessage.includes("password")) {
                document.getElementById("error").innerHTML = "Wrong password, try again"
            }

            if (errorMessage.includes("email")) {
                document.getElementById("error").innerHTML = "Wrong email, try again"
            }
        }
        if (props.model.currentUser != null) {
            window.location.hash = "#HomeScreen"
        }

    }


    return <LoginView onUserLogIn={handleLoginACB} />
}



export default Login;