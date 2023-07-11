import { useState } from "react";

import Main from "./components/Main";
import Profile from "./components/Profile";

import './App.css';

function App() {
  const [Index, setIndex] = useState(0);

  function handleMain() {
    return <Main />
  };

  function handleProfile() {
    return <Profile />
  };

  return (
    <div className="App">
      {Index === 0 ? handleMain() : handleProfile()}
      <footer>
        <ul className="pages-list">
          <li className="page-item" onClick={() => setIndex(0)}><strong className="page" style={{color: Index === 0 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)"}}>Main</strong></li>
          <li className="page-item" onClick={() => setIndex(1)}><strong className="page" style={{color: Index === 1 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)"}}>Profile</strong></li>
        </ul>
      </footer>
    </div>
  )
}

export default App;
