import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  color-black border-bottom border-body bg-body-dark sticky-top " data-bs-theme="light">
                    <div className="container-fluid ">
                        <Link className="navbar-brand text-light mx-4" to="/">
                            NewsNexus
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-4  text-light" aria-current="page" to="/">
                                        Top-Headlines
                                    </Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link  text-light" to="/politics">
                                        Politics
                                    </Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link  text-light" to="/sports">
                                        Sports
                                    </Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link  text-light" to="/cricket">
                                        Cricket
                                    </Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link  text-light" to="/entertainment">
                                        Entertainment
                                    </Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link  text-light" to="/technology">
                                        Technology
                                    </Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link  text-light" to="/world">
                                        World News
                                    </Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link  text-light" to="/health">
                                       Health
                                    </Link>
                                </li>
                               
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
