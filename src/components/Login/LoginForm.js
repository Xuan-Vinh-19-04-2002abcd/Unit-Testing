import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const handleUsernameChange = (event) => {
        const value = event.target.value;
        const sanitizedValue = value.replace(/[^\w]/gi, '');

        setUsername(sanitizedValue);

        if (value !== sanitizedValue) {
            setUsernameError('Username cannot contain special characters or spaces');
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowSuccessMessage(true);
        toast.success('Login successful!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username-input" className="pd">
                    UserName
                </label>
                <input
                    type="text"
                    id="username-input"
                    value={username}
                    onChange={handleUsernameChange}
                    data-testid="test-username-input"
                />
                {usernameError && <p>{usernameError}</p>}
            </div>
            <div>
                <label htmlFor="password-input" className="pd">
                    Password
                </label>
                <input
                    type="password"
                    id="password-input"
                    value={password}
                    onChange={handlePasswordChange}
                    data-testid="test-password-input"
                />
            </div>
            <button type="submit">Login</button>
            {showSuccessMessage && (
                <p>Login successful! You can display any message here.</p>
            )}
        </form>
    );
};

export default LoginForm;
