import React, {useState, Component} from "react";
import { render } from "react-dom";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class StudyRooms extends Component {
    constructor(props) {
        super(props);
    };

    handleClick = (event) => {

    }

    render() {
        return(
            <div className="class">
                <div class="container">
                    <div class="row align-items-center my-5"></div>
                        <ul>
                            <li> Group Study Room A </li>
                            <li> Group Study Room B </li>
                            <li> Group Study Room C </li>
                        </ul>
                        
                        <Button variant = "danger" onClick = {this.handleClick}> Make Reservation for Room A </Button>
                    
                        

                </div>
            </div>

        )


    }
}

export default withRouter(StudyRooms)