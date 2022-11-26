function CreateAccountView(props) {
    return <div>
        
        <div>
        <img src="Quizalicious logo.svg" className="image"/>
            <form>
                <input  placeholder = "Enter a valid email"></input>
               <div><input  placeholder = "Enter a password"></input></div>
              
            </form>
            <a href="">back</a><br/>
            <button  onClick={props.onUserCreate}>Create account</button>

        </div>
    </div>;



// function loginError(){
//     props.error
// }

    // function loginSuccess(){
    //     props.success
    // }
}

export default CreateAccountView;