import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss'
import Table from "../../components/Table";
import Layout from "../../components/Layout";
import SmallCard from "../../components/SmallCard";
import {Spinner} from "react-bootstrap";
import Carousel from "../../components/Carousel";
import CarouselFade from "../../components/Carousel";


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
            <div className="row ">
                <div className="col-4">
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                    photo="abhishek-tanwar-unsplash.jpg"
                />
                </div>
                <div className="col-4">
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                    photo="christina-terzidou-unsplash.jpg"
                />
                </div>
                <div className="col-4">
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                    photo="johannes-heel-unsplash.jpg"
                />
                </div>
                <div className="col-4">
                <Table
                    title="JUNE 24,2022"
                    text="Book and Plan your holidays right"
                    photo="kir-simakov-U-unsplash.jpg"
                />
                </div>
                <div className="col-4">
                    <Table
                        title="JUNE 24,2022"
                        text="Book and Plan your holidays right"
                        photo="refargotohp-unsplash.jpg"
                    />
                </div>
                <div className="col-4">
                    <Table
                        title="JUNE 24,2022"
                        text="Book and Plan your holidays right"
                        photo="tanya-grypachevskaya-unsplash.jpg"
                    />
                </div>
            </div>
            </div>
            <CarouselFade/>
            <div className={'container'}>
                <div>
                    <h2>More From News</h2>
                </div>
                <div className={'row row-border'}>
                    <div className={'col-md-6 mb-4 '}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                </div>
                <div className={'row row-border'}>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                    <div className={'col-md-6 mb-4'}>
                        <SmallCard
                            title='We introduces new professional training to support growing IT'
                            subTitle='June 24,2022'
                            photo={"/resimler/resim.jfif"}
                            url={''}
                        />
                    </div>
                </div>
                <button className={'btn'}>
                    Load More
                </button>
            </div>
        </section>
    </Layout>);


}

export default Home;
