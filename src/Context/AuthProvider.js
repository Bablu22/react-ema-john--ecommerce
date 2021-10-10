import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allCOntext = useFirebase()
    return (
        <AuthContext.Provider value={allCOntext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
