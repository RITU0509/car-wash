import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function MySlider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                             
                  <img src="./public/carg.jpg" alt=""  width="1500px" height="500px"/> 
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src="./public/carg1.jpg" alt="" width="1500px" height="500px" /> 
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                {/* <img src="https://via.placeholder.com/1536x300.png/a59090/000000?Text=1536x300" alt="" />  */}
                <video width="1500px" height="500px" autoPlay loop muted>
        <source src="./public/SparkleRide.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
      "Delivering a spotless shine for a car that drives like new!"
      </div>
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
