import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement2
    if (error) {
        errorElement2 = <div>
            <p className='text-center text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <h1 className='text-center mt-5'>Log In</h1>
            <Form className='w-25 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button onClick={handleLogin} variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            {errorElement2}
            <p className='text-center my-2'>Are you new here?<Link to='/Register'>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default LogIn;