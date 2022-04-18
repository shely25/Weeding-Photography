import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const LogIn = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Log In</h1>
            <Form className='w-25 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p className='text-center my-2'>Are you new here?<Link to='/Register'>Please Register</Link></p>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ border: '1px solid blue', width: '100px', borderRadius: '4px' }}></div>
                <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                <div style={{ border: '1px solid blue', width: '100px', borderRadius: '4px' }}></div>
            </div>
            <GoogleLoginButton className='w-25 mx-auto my-3' onClick={() => alert("Hello")} />
            <GithubLoginButton className='w-25 mx-auto' onClick={() => alert("Hello")} />
        </div >
    );
};

export default LogIn;