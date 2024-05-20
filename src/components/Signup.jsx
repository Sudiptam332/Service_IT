import React, { useEffect, useState } from 'react';
import "./Loging_Signup.css"
import Login from './Login';
import Authentication from './Authentication';


const Signup = ({ onClose, onSignUp, handelVisibleSign, togglelogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [visibleLogin, setVisibleLogin] = useState(false);

    const toggleModal = () => {
        handelVisibleSign();
    };

    const gotoLogin = () => {
        setVisibleLogin(!visibleLogin);

    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Here you can perform sign-up actions, such as sending data to a server
        // For simplicity, we'll just pass the signup data to a parent component
        //onSignUp({ username, email, password });
        // Close the modal after sign-up attempt
        onClose();
    };


    if (!visibleLogin)
        return (

            <div className="modal-wrapper">
                <div className="modal-content">
                    <button className="close-modal" onClick={toggleModal}>
                        X
                    </button>
                    <h1>Sign Up</h1>
                    <div className="slCon">

                        <form onSubmit={togglelogin}>
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
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <button type="submit" onClick={togglelogin}>Sign Up</button>
                        </form>
                    </div>
                    <a className='signup' onClick={gotoLogin}>Do you have an account?</a>
                </div>

            </div>
        );
    else
        return <Login gotoLogin={gotoLogin} />
};

export default Signup;
