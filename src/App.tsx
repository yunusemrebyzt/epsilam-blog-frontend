import "styles/app.scss";
import "styles/global.scss";
import {Provider} from "react-redux";
import React from "react";
import store from "redux/store";
import "./i18n";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "pages/Home";
import Profile from "./pages/Profile";

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}


export default App;
