import { useState } from "react";

import Rate from "./Rate";
import History from "./History";

import './Main.css';

function Main() {
  const [pageIndex, setPageIndex] = useState(0);

  function handleRate() {
    return <Rate />
  };

  function handleHistory() {
    return <History />
  };

  return (
    <div className="Main">
      <header>
        <ul className="components-list">
          <li
            id="rate"
            className="component-item"
            onClick={() => setPageIndex(0)}
          >
            <strong
              className="component"
              style={
                {
                  color: pageIndex === 0 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)",
                  fontSize: pageIndex === 0 ? "100%" : "70%"
                }
              }>
                Rate
            </strong>
          </li>
          <li
            id="history"
            className="component-item"
            onClick={() => setPageIndex(1)}
          >
            <strong
              className="component"
              style={
                {
                  color: pageIndex === 1 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)",
                  fontSize: pageIndex === 1 ? "100%" : "70%"
                }
              }>
                History
            </strong>
          </li>
        </ul>
      </header>
      {pageIndex === 0 ? handleRate() : handleHistory()}
    </div>
  )
  }

export default Main;
