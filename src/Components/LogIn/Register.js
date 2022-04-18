import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";

const Register = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Register</h1>
            <Form className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center my-2'>Already have an account?<Link to='/LogIn'><span className='text-decoration-none'>Please Log In</span></Link></p>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ border: '1px solid blue', width: '100px', borderRadius: '4px' }}></div>
                <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                <div style={{ border: '1px solid blue', width: '100px', borderRadius: '4px' }}></div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <Button className='text-dark shadow fs-5 p-2 bg-white border-0 w-25 d-flex justify-content-center align-items-center'>
                    <IoLogoGoogle />
                    <span className='mx-2'> Register With Google</span>

                </Button>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <Button className='fs-5 p-2 bg-dark border-0 w-25 d-flex justify-content-center align-items-center'>
                    <IoLogoGithub />
                    <span className='mx-2'> Register With Github</span>

                </Button>
            </div>
        </div>
    );
};

export default Register;