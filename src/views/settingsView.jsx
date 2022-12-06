function SettingsView(props) {
    return (
        <div>
          <input type="file" onChange={props.handleChange} />
          <button disabled={props.loading || !props.photo} onClick={props.handleClick}>Upload</button>
          <img src={props.photoURL} />
        </div>
      );
}

export default SettingsView;
