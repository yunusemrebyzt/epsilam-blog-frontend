import React from 'react';
import Carousel, {CarouselProps} from 'react-bootstrap/Carousel';
import './Carousel.scss'
const CarouselFade = () => {

    return (

        <Carousel fade className="sliderArea"  interval={null}>
            <Carousel.Item>
                <div className="container ">
                <img
                    className="d-block w-100"
                    src="images/michail-dementiev.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="textArea container">
                        <h3>Pop-Art Style in popular SGI Technologies</h3>
                        <p>JUNE 24,2022</p>
                    </div>

                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container ">
                <img
                    className="d-block w-100"
                    src="images/robin-billy.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="textArea container">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container ">
                <img
                    className="d-block w-100"
                    src="images/tanya-grypachevskaya-unsplash.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="textArea container">
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </div>


                </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );

}

export default CarouselFade;