import React from "react";
import './Header.scss'
import {IHeader} from "./types";

const Header = ({}:IHeader) => {

    return (
                <div className="">
                    <div className="container">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
                            <a className="navbar-brand" href="#">LOGO</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse container" id="navbarNav">
                                <ul className="navbar-nav   ">
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
                    <div className="container">
                        <h1>Welcome to the Blog</h1>
                        <p>SOME INSTERESTIONG SUBTITLE FOR BLOG PAGE</p>
                    </div>
                    <div className="mt-5">
                        <img src="https://images-unsplash-com.translate.goog/photo-1657299142018-4f7f33aea18c?ixlib=rb-1.2.1&dl=wasa-crispbread-z087QfkQu08-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb&_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=sc" alt=""/>
                    </div>

                </div>
        )
}

export default Header;