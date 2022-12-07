import SettingsView from "../views/settingsView.jsx";
import NotLoggedIn from "../presenters/notLoggedInPresenter.jsx";
function Settings(props) {
  const [photo, setPhoto]             = React.useState(null);
  const [loading, setLoading]         = React.useState(false);
  const [photoURL, setPhotoURL]       = React.useState(null);
  const [backClicked, setBackClicked] = React.useState(false);

  React.useEffect(wasCreatedACB, []);

  function observerACB(){ setPhotoURL(props.model.currentUser.photoURL);}
  function wasCreatedACB(){ 
      if( props.model.currentUser)
        setPhotoURL(props.model.currentUser.photoURL);
      props.model.addObserver(observerACB);                               
      function isTakenDownACB(){ props.model.removeObserver(observerACB);} 
      return isTakenDownACB;
  }

  function backClick() {
    setBackClicked(true);
    setTimeout(()=>{
      window.location.hash="#HomeScreen";
    }, 800);
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }
  function handleClick() {
    props.model.setUserProfilePicture(photo, setLoading);
  }
  if(!props.model.currentUser)
        return <NotLoggedIn/>;
    
  return <SettingsView  handleChange={handleChange}
                        backClicked={backClicked}
                        backClick={backClick}
                        loading={loading}
                        photo={photo}
                        handleClick={handleClick}
                        photoURL={photoURL} />
}

export default Settings;