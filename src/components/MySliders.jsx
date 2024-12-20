import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function MySlider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                             
                  <img src="https://via.placeholder.com/1536x300.png/a59090/000000?Text=1536x300" alt="" /> 
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://via.placeholder.com/1536x300.png/a59090/000000?Text=1536x300" alt="" /> 
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://via.placeholder.com/1536x300.png/a59090/000000?Text=1536x300" alt="" /> 
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MySlider
