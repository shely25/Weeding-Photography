import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let errorElement1
    if (error) {
        errorElement1 = <div>
            <p className='text-center text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/Home')
    }
    const handleRegister = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <h1 className='text-center mt-5'>Register</h1>
            <Form className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password"
                        onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button onClick={handleRegister} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            {errorElement1}
            <p className='text-center my-2'>Already have an account?<Link to='/LogIn'><span className='text-decoration-none'>Please Log In</span></Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};
export default Register;