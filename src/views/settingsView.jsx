import './settingsView.css';

function SettingsView(props) {
    return (
        <div className={"settingsView appear "+(props.backClicked&&"implode")}>
          <h2>Settings</h2>
          <h5>Profile picture update</h5>
          <img src={props.photoURL} className="profilePicture" /><br/>
          <input type="file" onChange={props.handleChange} />
          <button disabled={props.loading || !props.photo} onClick={props.handleClick}>Upload</button><br/>
          <button onClick={props.backClick}>Back</button>
        </div>
      );
}

export default SettingsView;
