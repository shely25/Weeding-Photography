import React from 'react';
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-center text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/Home')
    }
    return (
        <div>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ border: '1px solid blue', width: '150px', borderRadius: '4px' }}></div>
                    <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                    <div style={{ border: '1px solid blue', width: '150px', borderRadius: '4px' }}></div>
                </div>
                {errorElement}
                <GoogleLoginButton onClick={() => signInWithGoogle()} className='w-25 mx-auto my-3' />
                <GithubLoginButton className='w-25 mx-auto' onClick={() => alert("Hello")} />
            </div >

        </div >
    );
};

export default SocialLogin;