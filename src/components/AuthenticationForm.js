import React, { useState } from 'react';

const AuthenticationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    const handleSignup = () => {
        // Handle signup logic here
    };

    return (
        <div>
            <h2>Authentication</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default AuthenticationForm;
