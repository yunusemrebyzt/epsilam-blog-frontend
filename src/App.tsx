import "styles/app.scss";
import "styles/global.scss";
import {Provider} from "react-redux";
import React from "react";
import store from "redux/store";
import "./i18n";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "pages/Home";
import Profile from "./pages/Team";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App(): JSX.Element {
    return (
        <div >
            <Provider store={store}>
                <Router>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">LOGO</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto ml-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/profile">Team</Nav.Link>
                                    <Nav.Link href="/blog">Blog</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/team" element={<Team/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                    </Routes>
                </Router>

            </Provider>
            <div className={'footer-main'}><a className="logo" href="#">LOGO</a>
                <div className={'left-area-footer'}></div>
                <div className={'right-area-footer'}></div>
            </div>
        </div>

    );
}


export default App;
