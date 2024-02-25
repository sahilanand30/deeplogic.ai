import React from 'react';
import Dashboard from './components/Dashboard';
import AuthenticationForm from './components/AuthenticationForm';
import PostForm from './components/PostForm';

const App = () => {
    return (
        <div>
            <h1>Social Media Dashboard</h1>
            <Dashboard />
            <AuthenticationForm />
            <PostForm />
        </div>
    );
};

export default App;
