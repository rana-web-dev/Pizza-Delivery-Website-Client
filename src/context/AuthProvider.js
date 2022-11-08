import React, { createContext, useEffect, useState } from 'react';
import app from '../../src/components/firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const GoogleProvider = new GoogleAuthProvider();

    // Services api data load
    const [serviceData, setService] = useState([]);

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then()
            .catch()
    }

    const googleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => console.log(error))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // Services API data load
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const authInfo = {
        serviceData,
        createUser,
        logIn,
        user,
        logOut,
        googleSignIn,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;