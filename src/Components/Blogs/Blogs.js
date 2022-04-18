import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div>
                <h3>Difference Between Authorization And Authentication</h3>
                <p>Authentication means the process of varifying someone.Whenever Someone want to log in in any webpage then who is he or the user verification is authentication.
                    On the other hand, Authorization is the process of varifying what specific application,data or files the user have permission.when someone log in then the specific application like is the user is admin or not or is the user have the pemission to do any work or not this need to verify which is known as athorization. </p>
            </div>
            <div>
                <h3>Why am I using Firebase? What other options do you have to implement authentication?</h3>
                <p>We are using firebase for many purposes like Authentication,Hosting, Cloud masseging, remote Configuration ect.</p>
            </div>
        </div>
    );
};

export default Blogs;