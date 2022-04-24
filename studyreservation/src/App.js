import React, {useState, Component} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import StudyRooms from "./components/StudyRooms"
import MyReservations from "./components/MyReservations"
import PastReservations from "./components/PastReservations"


export default function App () {
  return (
    <div
      style={{
        //padding: "16px",
        //margin: "16px",
        alignItems: "center"
      }}
    >
      
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <StudyRooms />} />
          <Route path="/myreservations" exact component={() => <MyReservations />} />
          <Route path="/pastreservations" exact component={() => <PastReservations />} />
        </Switch>
        
      </Router>
      

    </div>
  );
};