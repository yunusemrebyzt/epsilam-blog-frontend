import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss'
import Table from "../../components/Table";
import Layout from "../../components/Layout";


const Home: React.FC = () => {
    return (<Layout>
        {/*Header Section*/}
        <section className={'mt-5'}>
            <div className="container title">
                <h1>Welcome to the Blog</h1>
                <p>SOME INSTERESTIONG SUBTITLE FOR BLOG PAGE</p>
            </div>
            <div className="mt-5 headerImg d-flex align-items-end justify-content-start">
                <div className="container headerText  ">
                    <h3>The Beauty of modern living </h3>
                    <p>JUNE 24,2022</p>
                </div>

            </div>
        </section>
        {/*Cards Section*/}
        <section>
            <div className="container mt-3">
                <h3>Latest New</h3>
            </div>
            <div className="container d-flex justify-content-between mt-4">
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                />
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                />
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                />
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                />
            </div>
        </section>
    </Layout>);
};

export default Home;
