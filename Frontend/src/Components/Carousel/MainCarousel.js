import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./MainCarousel.css";



function MainCarousel() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/o.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/p.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/q.png"
                        alt="First slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MainCarousel
