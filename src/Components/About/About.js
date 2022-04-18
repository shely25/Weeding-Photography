import React from 'react';
import shely from '../../Images/shely.jpg'
import './About.css'

const About = () => {
    return (
        <div className='text-center m-5'>
            <h3>About Me</h3>
            <div className='text'>
                < img src={shely} alt="" />
                <div>
                    <h6>Shakila Khatun Shely</h6>
                    <p>I am A wedding Photographer.From my Childhood my passion is photography.From this I am thinking about this work.</p>
                </div>
            </div >
        </div >
    );
};

export default About;