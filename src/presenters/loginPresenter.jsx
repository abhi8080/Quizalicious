import LoginView from "../views/loginView";
import React from "react";
// This is probably your Model in `MVP`
async function handleLoginACB(model, data) {
    const { email, password } = data;
  
    await model.signIn(email, password);
  
    if (model.currentUser != null) {
      window.location.hash = "#HomeScreen";
    }
  
  }
  
    function Login(props) {
    const [error, setError] = React.useState("");
  

    async function onLoginFormData(data) {
      try {
        await handleLoginACB(props.model, data);
      } catch (e) {
        console.log(e.message)
        setError(e);
      }
      //console.log(error)
    }
  
    return <LoginView onUserLogIn={onLoginFormData} error = {error} />;
  }
  
  export default Login;