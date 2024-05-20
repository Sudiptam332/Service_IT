import React, { useEffect, useState } from 'react';
import "./Loging_Signup.css"

const Login = ({ onClose, onLogin, gotoLogin, handelVisibleSign }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toggleModal = () => {
        gotoLogin();
        //handelVisibleSign();
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you can perform login authentication
        // For simplicity, we'll just pass the username to a parent component
        onLogin(username);
        // Close the modal after login attempt
        onClose();
    };



    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <button className="close-modal" onClick={toggleModal}>
                    X
                </button>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
