import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );
    let errorElement2
    if (error || error2) {
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

    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Mail Sending");
    }
    return (
        <div>
            <h1 className='text-center mt-5'>Log In</h1>
            <Form className='w-25 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" required onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
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
            <p className='text-center my-2'>Are you new here?<Link className='text-decoration-none' to='/Register'>Please Register</Link></p>
            <p className='text-center my-2'>Forgate Password?<button onClick={handleResetPassword} className='btn btn-link text-decoration-none'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default LogIn;