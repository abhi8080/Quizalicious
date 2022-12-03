function CreateAccountView(props) {
    return  <div className="RegisterBoxWrapper">
                <img src="Quizalicious logo.svg" className="image blob"/>
                <div id = "error" ></div>
                <div className="registerBox">
                    <form>
                        <label for="email">Email address:</label><br/> 
                        <input type = "email" placeholder = "" id="email"></input> <div> 
                        <label for="username">Username:</label><br/>
                        <input type = "username" placeholder = "" id="username"></input></div>
                        <label for="password">Password:</label><br/>
                        <div><input type = "password" placeholder = "" id="password"></input></div>
                    </form>
                    <a href="#Login">back</a>
                    <button  onClick={props.onUserCreate}>Create account</button>
                </div>
            </div>;


   
}

export default CreateAccountView;