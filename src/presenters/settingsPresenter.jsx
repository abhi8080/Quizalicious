import SettingsView from "../views/settingsView";
function Settings(props) {
  const [photo, setPhoto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [photoURL, setPhotoURL] = React.useState(props.model.currentUser.photoURL);

  React.useEffect(wasCreatedACB, []);

  function observerACB(){ setPhotoURL(props.model.currentUser.photoURL);}
  function wasCreatedACB(){  
      props.model.addObserver(observerACB);                               
      function isTakenDownACB(){ props.model.removeObserver(observerACB);} 
      return isTakenDownACB;
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }
  function handleClick() {
    props.model.setUserProfilePicture(photo, setLoading);
  }

return <SettingsView  handleChange={handleChange} loading={loading} photo={photo} handleClick={handleClick} photoURL={photoURL} />
}

export default Settings;