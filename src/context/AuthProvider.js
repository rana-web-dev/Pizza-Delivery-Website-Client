import React, { createContext, useEffect, useState } from 'react';
import app from '../../src/components/firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();

    // Services api data load
    const [serviceData, setService] = useState([]);

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then()
            .catch()
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider);



            // .then(result => {
            //     const user = result.user;
            //     setUser(user);
            // })
            // .catch(error => console.log(error))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // Services API data load
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
        loading,
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