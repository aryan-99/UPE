import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

export default class Home extends Component {
    render() {
        return (
            <div id="home" className="h-100">
                <Navbar />
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div>
                        <h1 className="text-center display-5">Welcome to the California State University - Chico chapter of</h1>
                        <br/>
                        <h1 className="text-center display-4">Upsilon Pi Epsilon</h1>
                        <br/>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-3">
                                <p className="lead container text-center">
                                    The mission of Upsilon Pi Epsilon (UPE) is to recognize academic excellence 
                                    at both the undergraduate and graduate levels in the Computing and Information Disciplines.
                                </p>
                            </div>
                            <div className="col-3">
                                <p className="lead container text-center">
                                    UPE is a member of the <Link to="https://www.achshonor.org/" target="_blank">Association of College 
                                    Honor Societies (ACHS)</Link> and has chapters in over 300 colleges and universities across the globe.
                                </p>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}