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
      console.log(error.message)

      if (error.message.includes("use")) {
        document.getElementById("error").innerHTML = "Email is already in use"
      }

      if (error.message.includes("invalid")) {
        document.getElementById("error").innerHTML = "Email not valid, try again"
      }

    }

    if (props.model.currentUser != null) {
      window.location.hash = "#HomeScreen"
    }

  }
  return <CreateAccountView onUserCreate={handleCreateAccountACB} />
}
export default CreateACC;
