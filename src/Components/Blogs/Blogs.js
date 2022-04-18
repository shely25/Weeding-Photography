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
                <p>Google firebase is a google backed application development software that enables developer to develop iOS,android,web applications. We are using firebase for many purposes like Authentication,Hosting, Cloud masseging, remote Configuration ect.Here we can find many advantages of using firebase.The advantages are it has reliable and extensive databases , realtime databases,cloud firestore,fast and safe hosting,free use of firebase dynamic link.easy to use authentication system.</p>
                <p>other Option:
                    <ul>
                        <li>Parse</li>
                        <li>Back4App</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>Couchbase</li>
                        <li>NativeScript</li>
                    </ul>

                </p>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>Other Services:
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analitic</li>
                        <li>Predictions</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;