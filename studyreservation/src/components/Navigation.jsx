import React from "react";
import { Link, withRouter } from "react-router-dom";

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
                  <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/MyReservations" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/MyReservations">
                  My Reservations
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/PastReservations" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/PastReservations">
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