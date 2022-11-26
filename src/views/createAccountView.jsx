function CreateAccountView(props) {
    return <div class="registerBox">
        <img src="Quizalicious logo.svg" className="image blob"/>
            <form>
                <input  placeholder = "Enter a valid email"></input>
               <div><input  placeholder = "Enter a password"></input></div>
              
            </form>
            <a href="#Login">back</a><br/>
            <button  onClick={props.onUserCreate}>Create account</button>
    </div>;



// function loginError(){
//     props.error
// }

    // function loginSuccess(){
    //     props.success
    // }
}

export default CreateAccountView;