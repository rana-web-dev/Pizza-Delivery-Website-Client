import React, { createContext, useEffect, useState } from 'react';
import app from '../../src/components/firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // Services api data load
    const [serviceData, setService] = useState([]);

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Services API data load
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const authInfo = {
        serviceData,
        createUser
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