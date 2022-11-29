import CreateAccountView from "../views/createAccountView";




function CreateACC(props) {

 function handleCreateAccountACB(){
  let email = document.getElementById('email').value
 
  let username = document.getElementById('username').value

  let password = document.getElementById('password').value

  try{
    props.model.createUser(email,username,password)
  
  }catch (error){
    console.log(error)

  }

  if(props.model.currentUser != null){
    window.location.hash = "#HomeScreen"
  }

  

}
    return <CreateAccountView  onUserCreate = {handleCreateAccountACB} />

}

export default CreateACC;