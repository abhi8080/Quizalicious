import CreateAccountView from "../views/createAccountView";

function CreateACC(props) {


    function handleCreateAccountACB(){ /* Do we want to send the user to the home screen after account has been created 
                                        or send them back to the log in screen*/ 
        
      console.log("Email OK") //This will have a function that checks if the email is valid
      console.log("Password OK")// This will have a function that checks if password meets requirements, (MAYBE?)     
      console.log("A new account has been created")//Creates account with the data above

    }


    return <CreateAccountView  onUserCreate = {handleCreateAccountACB}/>

}

export default CreateACC;