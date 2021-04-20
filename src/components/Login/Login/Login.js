import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //redirect hooks
    let history = useHistory();
    let location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const signOut = () => {
        setLoggedInUser([]);
    }


    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                const loggedInUserUpdated = {
                    ...loggedInUser,
                    isAdmin: data
                }

                setLoggedInUser(loggedInUserUpdated);
                // console.log('Updated', loggedInUserUpdated);
            });
    }, [loggedInUser.email])


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user; //result object destructuring

                //create object
                const signInUser = {
                    name: displayName,
                    email,
                    avatar: photoURL
                }

                setLoggedInUser(signInUser);

                //use history hooks
                history.replace(from);

            }).catch((error) => {
                console.error('handleGoogleSignIn', error);
            });
    }
    return (
        <div>
            {
                loggedInUser.email ?
                    <div className="container text-center">
                        <h1>Logout</h1>
                        <button className="btn btn-danger btn-lg" onClick={signOut}>Log Out</button>
                    </div>
                    :
                    <div className="container text-center">
                        <h1>Please log In To continue</h1>
                        <button className="btn btn-dark btn-lg" onClick={handleGoogleSignIn}>Continue with Google</button>
                    </div>

            }

        </div>

    );
};

export default Login;