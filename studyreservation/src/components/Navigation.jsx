import React from "react";
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Navigation(props) {
  return (
    
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-danger">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Study Rooms
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">

              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Study Rooms
                  <span class="sr-only"></span>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/myreservations" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/myreservations">
                  My Reservations
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/pastreservations" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/pastreservations">
                  Past Reservations
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default withRouter(Navigation);