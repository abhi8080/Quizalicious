import { useState } from "react";


function LoginView(props) {

   let mybtn = document.getElementById("mybtn")
   var input1 = document.getElementById("email");

   if(input1 != null){

    input1.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          mybtn.click();
        }
      });

  }

  var input2 = document.getElementById("password");
  if(input2 != null){

    input2.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          mybtn.click();
        }
      });

  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (<div className="loginBox">
    <img src=" Quizalicious logo.svg" className="image blob" />
    <form>
      <input  type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
      <div><input  type="password" placeholder="Password" id="password"
                  onChange={(e) => setPassword(e.target.value)}></input></div>
      <div id="error" >{errorHandling}</div>
      <a href="#CreateAccount">Create a new account</a>
    </form>
    <button onClick={() => props.onUserLogIn({ email, password })} id = "mybtn">Log in</button>
  </div>
  );



 function errorHandling() {
    console.log(props.error.message);
    if (props.error.message.includes("password")) {
      return "Wrong password, try again";
    }
  
    if (props.error.message.includes("email")) {
      return "Wrong email, try again";
    }
  }
}

export default LoginView;