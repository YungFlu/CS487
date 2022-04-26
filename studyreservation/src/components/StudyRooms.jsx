import React, {useState, Component} from "react";
import { render } from "react-dom";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css" 
import ApiCalendar from 'react-google-calendar-api';

class StudyRooms extends Component {
    constructor(props) {
        super(props);
    };

    handleClickA = (event) => {
        window.open("https://calendar.google.com/calendar/u/1?cid=Y180Z2JtYzZucDk2NXE2OXFjNHFpZmIxdW90NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t")
        //CALENDAR_ID: c_4gbmc6np965q69qc4qifb1uot4@group.calendar.google.com
    }

    handleClickB = (event) => {
        //https://calendar.google.com/calendar/u/1?cid=Y19obTBlOGNvanRvbTB2cXJtc244NmxnMWtsb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t
        //CALENDAR_ID: c_hm0e8cojtom0vqrmsn86lg1klo@group.calendar.google.com
    }

    handleClickC = (event) => {
        //https://calendar.google.com/calendar/u/1?cid=Y18xdDEwMjU3dTNpN3BiMDkxOThyaXRjZmptZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t
        //CALENDAR_ID: c_1t10257u3i7pb09198ritcfjmg@group.calendar.google.com 
    }

    render() {
        return(
            <body>
                <div className = "divStyle"> Group Study Room A 
                    <div class = "button">
                        <Button variant = "danger" onClick = {this.handleClickA}> Make Reservation for Room A </Button>
                    </div>
                </div>
                    
                <div className = "divStyle"> Group Study Room B 
                    <div class = "button">
                        <Button variant = "danger" onClick = {this.handleClickB}> Make Reservation for Room B </Button>
                    </div>
                </div>

                <div className = "divStyle"> Group Study Room C 
                    <div class = "button">
                        <Button variant = "danger" onClick = {this.handleClickC}> Make Reservation for Room C </Button>
                    </div>
                </div>
                        
            </body>
                        

        )


    }
}

export default withRouter(StudyRooms)