import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeNickname, changeTheme, changeStart, changeNotifications } from "../features/profile/profileSlice";

import './Profile.css';

function Profile() {
  const profile = useSelector((state) => state.profile.profile);
  const stories = useSelector((state) => state.story.stories);

  const dispatch = useDispatch();

  function handleStartProfile() {
    dispatch(changeStart("profile"));
  };

  function handleStartMain() {
    dispatch(changeStart("main"));
  };

  function handleNotifications(ev) {
    dispatch(changeNotifications(ev.target.checked));
  }

  return (
    <div className="Profile">
      <h3>Profile</h3>
      <div className="profile-info">
        <img id="avatar" src="/default.jpg" />
        <b className="nickname">{profile.nickname}</b> <br />
        <span className="storiesnum">Stories number: {stories.length}</span>
      </div>
      <div className="theme">
        <span className="gray">Theme</span>
        <div class="dropdown">
          <button className="theme-button">{profile.theme}</button>
          <div className="dropdown-options">
            <button>System</button>
            <button>Black</button>
            <button>Light</button>
          </div>
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
