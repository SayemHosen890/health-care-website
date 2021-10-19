import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="carosel mt-5 pt-5" id="home">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://www.journalajrs.com/public/journals/93/homepageImage_en_US.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://www.healio.com/~/media/slack-news/stock-images/fm_im/d/doctor_parent_child_shutterstock.jpg?la=en"
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://media.sciencephoto.com/f0/14/74/81/f0147481-800px-wm.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://www.renalandurologynews.com/wp-content/uploads/sites/22/2021/07/COVID-19-Oxygen-Mask-hospital-G-1265183690-web.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <Doctors></Doctors>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;