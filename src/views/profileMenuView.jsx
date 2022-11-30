function ProfileMenuView(props) {
    return <div className="profileMenu">
        <div className="name item">Signed in as Loid Forger</div>
        <div className="divider"></div>
        <div className="profile item" onClick={props.yourProfile}>Your profile</div>
        <div className="settings item" onClick={props.yourSettings}>Your settings</div>
        <div className="logOut item" onClick={props.logOut}>Log out</div>
    </div>;
}

export default ProfileMenuView;
