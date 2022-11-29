import LoginView from "../views/loginView";

function Login(props) {

    async function handleLoginACB() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        try {
            await props.model.signIn(email, password)
            console.log("ks") //detta skrivs ut i consolen

        } catch (error){
            console.log(error) // detta skrivs inte ut i consolen
            handleErrorACB(error);
        }
        if (props.model.currentUser != null) {
            window.location.hash = "#HomeScreen"
        }   
        function handleErrorACB(error){ //Verkar som den inte ens kommer in hit, eller fastnar den någonstans
            console.log("jaisjd")
            switch(error.message){
            case "auth/invalid-password":
               return "Password not correct";

                case "auth/invalid-email":
                  handleInvaildEmail();
                
                  case "auth/user-not-found":
                    return "Create an account";
            }
           // props.model.currentUser = null;
        }

        function handleInvaildEmail(){
            console.log("Hej banana")
        }

        }
        
       
        return <LoginView onUserLogIn={handleLoginACB} />
    }



export default Login;