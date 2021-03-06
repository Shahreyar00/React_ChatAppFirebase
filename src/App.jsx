import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from "./context/auth";
import Profile from './pages/Profile';
import { auth } from './firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={!user?<Login/>:<Home />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App