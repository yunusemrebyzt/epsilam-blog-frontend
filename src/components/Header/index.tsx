import React from "react";
import './Header.scss'
import {IHeader} from "./types";

const Header = ({}:IHeader) => {

    return (
                <div className="headerNav">
                    <div className="container ">
                        <nav className="navbar navbar-expand-lg navbar-light   ">
                            <a className="navbar-brand" href="#">LOGO</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse container" id="navbarNav">
                                <ul className="navbar-nav ml-auto  ">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

        )
}

export default Header;