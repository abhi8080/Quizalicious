import CreateAccountView from "../views/createAccountView";

function CreateACC(props) {

  async function handleCreateAccountACB() {
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    try {
      await props.model.createUser(email, username, password)
    }
    catch (error) {
      var errorMessage = error.message;
      console.log(errorMessage)

      if (errorMessage.includes("use")) {
        document.getElementById("err").innerHTML = "Email is already in use"
        return;
      }

      if (errorMessage.includes("invaild")) {
        document.getElementById("err").innerHTML = "Email not valid, try again"
      }

      if (errorMessage.includes("weak")) {
        document.getElementById("err").innerHTML = "The password must have atleast 6 characters"
        return;
      }
    }
    if (props.model.currentUser != null) {
      window.location.hash = "#HomeScreen"
    }
  }
  return <CreateAccountView onUserCreate={handleCreateAccountACB} />

}

export default CreateACC;