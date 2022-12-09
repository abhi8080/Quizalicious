import LoginView from "../views/loginView";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function userEmail(string) {
    setEmail(string)
    console.log(email)

  }

  function userPassword(string) {
    setPassword(string)
    console.log(password)

  }

  async function handleLoginACB() {
    try {
      await props.model.signIn(email, password)
    }
    catch (e) {
      console.log(e)
      setError(e)
    }

    if (props.model.currentUser != null) {
      navigate("/Home");
    }

  }


  return <LoginView onUserLogIn={handleLoginACB} error={error} onUserEmail={userEmail} onUserPassword={userPassword} />;

}
export default Login;

// if (model.currentUser != null) {
//   navigate("/Home");
// }