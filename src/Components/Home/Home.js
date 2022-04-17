import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/marriage-1.jpg'
import banner2 from '../../Images/banner5.webp'
import banner3 from '../../Images/banner2.jpg'
import './Home.css'

const Home = () => {
    return (
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
                        <p>If you want to capture your beutiful moment contact me.
                            wedding photographer in melbourne
                            wedding photographer in melbourne
                            Fremantle Perth Bridal Designer Jaime Lee Major
                            briars atlas.
                            pretty fabulous
                            wedding photos
                            made for
                            just like you.
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
    );
};

export default Home;