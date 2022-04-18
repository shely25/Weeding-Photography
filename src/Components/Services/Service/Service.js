import { Button } from 'react-bootstrap';
import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { Name, Price, Services, description, img } = props.service

    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4 className='tittle mt-2'>{Name}</h4>
            <ul className='fw-bolder'>
                {
                    Services.map(s => <li>{s}</li>)
                }
            </ul>
            <h3>Price:<span className='fw-lighter'>${Price}</span></h3>
            <p>{description}</p>
            <div className='mx-auto'>
                <Link className=' text-decoration-none bg-primary text-white p-1 rounded' to='/CheckOut'>Grab Now</Link >
            </div>
        </div>
    );
};

export default Service;