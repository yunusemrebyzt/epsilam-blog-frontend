import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header";
import './Home.scss'


const Home: React.FC = () => {
    return (
        <div className="">
            <Header/>
            <div className="container title">
                <h1>Welcome to the Blog</h1>
                <p>SOME INSTERESTIONG SUBTITLE FOR BLOG PAGE</p>
            </div>
            <div className="mt-5 headerImg d-flex align-items-end justify-content-start">
                <div className="container headerText  ">
                    <h3>The Beauty of modern living </h3>
                    <p>june 24,2022</p>
                </div>

            </div>
        </div>

    );
};

export default Home;
