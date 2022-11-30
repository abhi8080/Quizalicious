function CreateAccountView(props) {
    return <div className="registerBox">
        <img src="Quizalicious logo.svg" className="image blob"/>
            <form>
                <input type = "email" placeholder = "Enter a valid email" id="email"></input> <div> 
                <input type = "username" placeholder = "Enter a user name" id="username"></input></div>
               <div><input type = "password" placeholder = "Enter a password" id="password"></input></div>
               
            </form>
            <a href="#Login">back</a><br/>
            <button  onClick={props.onUserCreate}>Create account</button>
    </div>;


   
}

export default CreateAccountView;