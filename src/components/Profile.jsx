import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeNickname, changeTheme, changeStart, changeNotifications } from "../features/profile/profileSlice";

import './Profile.css';

function Profile() {
  const profile = useSelector((state) => state.profile.profile);
  const stories = useSelector((state) => state.story.stories);

  const [dropped, setDropped] = useState(false);

  const dispatch = useDispatch();

  function handleTheme() {
    const dropdownOptions = document.getElementsByClassName('dropdown-options');
    if (dropped) {
      for (let i = 0; i < dropdownOptions.length; i++) {
        dropdownOptions[i].style.display = 'none';
        dropdownOptions[i].style.position = 'absolute';
      };
      setDropped(!dropped);
    }
    else {
      for (let i = 0; i < dropdownOptions.length; i++) {
        dropdownOptions[i].style.display = 'block';
        dropdownOptions[i].style.position = 'relative';
      };
      setDropped(!dropped);
    }
  }

  function handleSysytemTheme() {
    dispatch(changeTheme("system"));
    handleTheme();
  };

  function handleBlackTheme() {
    dispatch(changeTheme("black"));
    handleTheme();
  };

  function handleLightTheme() {
    dispatch(changeTheme("light"));
    handleTheme();
  };

  function handleStartProfile() {
    dispatch(changeStart("profile"));
  };

  function handleStartMain() {
    dispatch(changeStart("main"));
  };

  function handleNotifications(ev) {
    dispatch(changeNotifications(ev.target.checked));
  };

  function showThemes() {
    if (profile.theme === "system") {
      return (
      <div className="dropdown-options">
        <button onClick={handleBlackTheme}>Black</button>
        <button onClick={handleLightTheme}>Light</button>
      </div>
      )
    }
    else if (profile.theme === "black") {
      return (
        <div className="dropdown-options">
          <button onClick={handleSysytemTheme}>System</button>
          <button onClick={handleLightTheme}>Light</button>
        </div>
      )
    }
    else if (profile.theme === "light") {
      return (
        <div className="dropdown-options">
          <button onClick={handleSysytemTheme}>System</button>
          <button onClick={handleBlackTheme}>Black</button>
        </div>
      )
    }
    else {
      return (
        <div className="dropdown-options">
          <button onClick={handleSysytemTheme}>System</button>
          <button onClick={handleBlackTheme}>Black</button>
          <button onClick={handleLightTheme}>Light</button>
        </div>
      )
    }
  }

  return (
    <div className="Profile">
      <h3>Profile</h3>
      <div className="profile-info">
        <img id="avatar" src="/default.jpg" />
        <b className="nickname">{profile.nickname}</b> <br />
        <span className="storiesnum gray">Stories number: {stories.length}</span>
      </div>
      <div className="theme">
        <span className="gray">Theme</span>
        <div class="dropdown">
          <button className="theme-button" id="theme-button" onClick={handleTheme}>{profile.theme}</button>
          {showThemes()}
        </div>
      </div>
      <div className="start-screen">
        <span className="gray">Start screen</span>
        <div className="start-screen-btn-group">
          <button className="start-screen-btn" id="start-screen-main" onClick={handleStartMain} style={
            {
              color: profile.start === "main" ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, 0.2)",
              backgroundColor: profile.start === "main" ? "#4d4d99" : "rgba(0, 0, 0, 0)",
            }
          }>Main</button>
          <button className="start-screen-btn" id="start-screen-profile" onClick={handleStartProfile} style={
            {
              color: profile.start === "profile" ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, 0.2)",
              backgroundColor: profile.start === "profile" ? "#4d4d99" : "rgba(0, 0, 0, 0)",
            }
          }>Profile</button>
        </div>
      </div>
      <hr></hr>
      <div className="notifications">
        <span className="notifications-text">Notifications</span>
        <label className="notifications-switch">
          <input className="notifications-input" type="checkbox" onChange={handleNotifications} checked={profile.notifications}></input>
          <span className="slider-round"></span>
        </label>
      </div>
      <hr></hr>
      <div>
        <p>Developer <a className="help-link" href="#">proceed</a></p>
        <p>Advise a function <a className="help-link" href="#">proceed</a></p>
        <p>Report a bug <a className="help-link" href="#">proceed</a></p>
      </div>
    </div>
  )
  }

export default Profile;
