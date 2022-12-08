import LoginView from "../views/loginView";
import React from "react";
import { useNavigate } from "react-router-dom";


function Login(props) {
  let navigate = useNavigate();

  async function handleLoginACB(model, data) {
    const { email, password } = data;
  
    await model.signIn(email, password);
  
    if (model.currentUser != null) {
      navigate("/Home");
    }
  }

  const [error, setError] = React.useState("");

  async function onLoginFormData(data) {
    try {
      await handleLoginACB(props.model, data);
    } catch (e) {
      setError(e);
    }
  }

  return <LoginView onUserLogIn={onLoginFormData} error={error} />;
}

export default Login;