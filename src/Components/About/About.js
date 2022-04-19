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
                    <p>I am Shakila Khatun Shely.I am a undergraduate student.I am studying B.Sc engineering at Khulna University of Enguineering And Technology.From my childhood it was my cherish desire to become an engineer.After completing my graduation my desire is to do work in a reputed multinational company.For this I am doing this course.Because of my study,it is very difficult to manage time for this course.Though i have not enough time,i tried my best to do hard work. </p>
                </div>
            </div >
        </div >
    );
};

export default About;