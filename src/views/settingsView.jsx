function SettingsView(props) {
    return  <div>
               <input type="file" onChange={props.onPhotoChosen} accept="image/png, image/jpg" />
            </div>;
}

export default SettingsView;