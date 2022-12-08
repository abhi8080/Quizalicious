import { useState } from "react";
import "./loginView.css";
import { Link } from "react-router-dom";


function LoginView(props) {
  let mybtn = document.getElementById("mybtn")
  var input1 = document.getElementById("email");

  if (input1 != null) {

    input1.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        mybtn.click();
      }
    });

  }

  var input2 = document.getElementById("password");
  if (input2 != null) {

    input2.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        mybtn.click();
      }
    });

  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return  <div className="loginView">
            <img src=" Quizalicious logo.svg" className="blob" />
            <img src="./Bubo_small.png" className="bubo" alt="Bubo!" />
            <div id="error" >{errorHandling()}</div>
            <div className="loginBox">
              <form>
                <label htmlFor="email">Email address:</label><br/>
                <input type="email" placeholder="" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" placeholder="" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                <Link to={"/CreateAccount"}>Create a new account</Link>
              </form>
              <button onClick={() => props.onUserLogIn({ email, password })} id="mybtn">Log in</button>
              <img src="./Quizalicious logo full dark theme.png" className="quiza" alt="" />
            </div>
          </div>;

  function errorHandling() {
    if( !props.error.message )
    return;
    if (props.error.message.includes("password")) {
      return "Wrong password, try again";
    }

    if (props.error.message.includes("email")) {
      return "Wrong email, try again";
    }
  }
}

export default LoginView;