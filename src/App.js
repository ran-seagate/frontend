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
      <div>
        <form
            encType="multipart/form-data"
            action="backend/files/"
            method="POST"
        >
          <h1>Upload a file</h1>
          <input type="file" name="file"/>
          <input type="submit" value="upload"/>
        </form>
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
      </div>
  );
}

