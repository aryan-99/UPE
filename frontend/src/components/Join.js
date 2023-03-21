import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

export default class Join extends Component {
    render() {
        return (
            <div id="join" className="h-100">
                <Navbar />
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div>
                        <div className="row">
                            <h1 className="text-center display-5">Interested in joining UPE?</h1>
                            <h1 className="text-center display-6"><Link to="https://forms.gle/LzY6L7AsjkNVT1gt5" target="_blank">Click here for the application</Link></h1>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5">
                                <p className="lead container text-center">
                                    Upsilon Pi Epsilon (UPE) is an honorary society whose membership consists of outstanding undergraduates and graduates in the Computing Sciences. 
                                    Since its establishment in 1967, UPE has grown to become an international organization with chapters at leading colleges and universities. 
                                    Membership in UPE is limited to those individuals demonstrating distinguished academic and professional achievement.
                                </p>
                                <p className="lead container text-center">
                                    Upsilon Pi Epsilon is the first, and only, existing international honor society in the Computing Sciences. 
                                    It has received the endorsement of the Association for Computing Machinery (ACM).
                                </p>
                                <p className="lead container text-center">
                                    When you apply for membership, you are applying for the next semester. 
                                    The induction ceremony is held within the first 3-4 weeks of every semester.
                                </p>
                            </div>
                            <div className="col-5">
                                <div className="card">
                                    <div className="card-header">
                                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="basic-tab" data-bs-toggle="tab" data-bs-target="#basic-tab-pane" type="button" role="tab" aria-controls="basic-tab-pane" aria-selected="true">Basic</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="undergrad-tab" data-bs-toggle="tab" data-bs-target="#undergrad-tab-pane" type="button" role="tab" aria-controls="undergrad-tab-pane" aria-selected="false">Undergraduate</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="graduate-tab" data-bs-toggle="tab" data-bs-target="#graduate-tab-pane" type="button" role="tab" aria-controls="graduate-tab-pane" aria-selected="false">Graduate</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="basic-tab-pane" role="tabpanel" aria-labelledby="basic-tab" tabindex="0">
                                                <h5 className="card-title">Basic requirements</h5>
                                                <p className="card-text">
                                                    <ul className="list-group list-group-flush">
                                                        <li class="list-group-item">Completing an application by the specified deadline (this can be found in the application).</li>
                                                        <li class="list-group-item">Paying the one-time $75 membership fee (if accepted).</li>
                                                        <li class="list-group-item">Attending the Initiation Ceremony (if accepted).</li>
                                                        <li class="list-group-item">Willing to contribute 30 hours of community service while attending California State University, Chico (if accepted).</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="undergrad-tab-pane" role="tabpanel" aria-labelledby="undergrad-tab" tabindex="0">
                                                <h5 className="card-title">Undergraduate requirements</h5>
                                                <p className="card-text">
                                                    <ul className="list-group list-group-flush">
                                                        <li class="list-group-item">A declared major of one of the following:
                                                            <ul className="list-group list-group-flush list-group-numbered">
                                                                <li class="list-group-item">Computer Science (CSCI)</li>
                                                                <li class="list-group-item">Computer Information Systems (CINS)</li>
                                                                <li class="list-group-item">Computer Animation and Game Design (CADG), Technical option</li>
                                                                <li class="list-group-item">Computer Engineering (EECE)</li>
                                                            </ul>
                                                        </li>
                                                        <li class="list-group-item">Minimum of 45 college units.</li>
                                                        <li class="list-group-item">At least two semesters of residency at CSU Chico.</li>
                                                        <li class="list-group-item">A GPA of 3.0 Overall and a Major GPA of 3.25 </li>
                                                        <li class="list-group-item">Completion of 15 units required by your major including CSCI 111, 211, 311, and any of the following list of classes:
                                                            <ul className="list-group list-group-flush list-group-numbered">
                                                                <li class="list-group-item">CSCI: 237, 217, 340, 344, 446, 551, 465</li>
                                                                <li class="list-group-item">CINS: 370, 448</li>
                                                                <li class="list-group-item">EECE: 320</li>
                                                                <li class="list-group-item">MATH: 217</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="graduate-tab-pane" role="tabpanel" aria-labelledby="graduate-tab" tabindex="0">
                                                <h5 className="card-title">Graduate requirements</h5>
                                                <p className="card-text">
                                                    <ul className="list-group list-group-flush">
                                                        <li class="list-group-item">Pursuing a graduate degree in Computer Science or Computer Engineering.</li>
                                                        <li class="list-group-item">Must have completed at least 6 units of 600-Level CSCI/CINS/EECE course work applying toward the master’s degree requirement in Computer Science or Computer Engineering.</li>
                                                        <li class="list-group-item"> Must have a GPA of 3.50 or above in all course work applying toward the master’s degree, including all necessary prerequisites.</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}