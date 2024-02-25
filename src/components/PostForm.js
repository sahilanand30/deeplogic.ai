import React, { useState } from 'react';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handlePost = () => {
        // Handle post creation logic here
    };

    return (
        <div>
            <h2>Post Form</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handlePost}>Post</button>
        </div>
    );
};

export default PostForm;
