import './createAccountView.css';
import { Link } from "react-router-dom";

function CreateAccountView(props) {
    return  <div className="RegisterBoxWrapper">
                <img src="Quizalicious logo.svg" className="image blob"/>
                <div>{errorHandling()}</div>
                <div className="registerBox">
                    <form onSubmit={creatingUserACB}>
                        <label htmlFor="email">Email address:</label><br/> 
                        <input type = "email" onChange={onUserEmailACB}></input> <div> 
                        <label htmlFor="username">Username:</label><br/>
                        <input type = "username" onChange={onUsernameACB}></input></div>
                        <label htmlFor="password">Password:</label><br/>
                        <div><input type = "password" onChange={onUserPasswordACB} ></input></div>
                        <button  type='submit'>Create account</button>
                    </form>
                    <Link to={"/Login"}>back</Link>
                </div>
            </div>;



function creatingUserACB(event){
    event.preventDefault()
    props.onUserCreate()
}

function onUserEmailACB(event){
    props.userEmail(event.target.value)
}
function onUsernameACB(event){
    props.userName(event.target.value)
}

function onUserPasswordACB(event){
    props.userPassword(event.target.value)
}

function errorHandling() {
    if (!props.error.message)
        return;
    if (props.error.message.includes("use")) {
        return "Email is already in use";
    }

    if (props.error.message.includes("invalid")) {
        return "Email not valid, try again";
    }
}
   
}

export default CreateAccountView;

