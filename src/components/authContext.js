// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from '../axiosConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (authToken) {
            axios.get('/api/auth/user').then(response => {
                setUser(response.data);
            }).catch(error => {
                console.error(error);
                logout();
            });
        }
    }, [authToken]);

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setAuthToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ authToken, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
