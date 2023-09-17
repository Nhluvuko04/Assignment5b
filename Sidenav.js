import React from "react";
import { Link } from "react-router-dom"; // BrowserRouter is typically used at a higher level

const Sidenav = ({ children }) => {
  return (
    <div className="navi">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li className="active">
            <ul className="list-unstyled" id="homeSubmenu">
              <span>Logo</span>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="questions">Questionnaire</Link>
              </li>
              <li>
                <Link to="create">Create</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Sidenav;
