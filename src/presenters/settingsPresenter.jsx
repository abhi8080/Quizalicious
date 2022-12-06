import SettingsView from "../views/settingsView";

function Settings(props) {
return <SettingsView  onPhotoChosen={(e) => props.model.setUserProfilePicture(e.target.value)} />
}

export default Settings;