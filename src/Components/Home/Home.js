import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/marriage-1.jpg'
import banner2 from '../../Images/banner5.webp'
import banner3 from '../../Images/banner2.jpg'
import './Home.css'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='Caurosel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='Caurosel-color'>
                            <h2>WELCOME TO MY <span className='color'>EYE MASTER</span></h2>
                            <p>EYE MASTER is a professional wedding photography company that has been part of the Montreal wedding community for over 25 years. We specialize in weddings, baptisms, maternity and newborn sessions, family photos and special events.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='Caurosel-color '>
                            <h3>WANT TO CAPTURE YOUR MOMENT??</h3>
                            <p>Traditional photography captures events as they are supposed to. The beauty of candid wedding photography lies in the natural reactions of the people. It clicks people in their best emotions and brings out the feelings of that moment through a picture.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='Caurosel-color '>
                            <h3>WHY I AM BEST FOR YOUR MOMENT???</h3>
                            <p> if you are hiring an independent photographer to capture the perfect portraits of you and your family, you are often expected to leave a small tip. Consider this tip a friendly gesture if the family portrait photographer goes the extra mile. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;