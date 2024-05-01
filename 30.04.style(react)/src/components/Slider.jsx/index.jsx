import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <><div className="container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img text="First slide" src='https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero1.jpg' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img text="Second slide" src='https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero2.jpg' />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img text="Third slide" src='https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero3.jpg' />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default Slider
