import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import GetFiles from "./filesRouter/getFiles";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/files">Files</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/files" element={<GetFiles/>} />
        </Routes>
      </div>
    </Router>
  );
}

