import React from 'react';
import '../App.css';

const Notification = ({ message }) => (
    <div className="notification">
        {message}
    </div>
);

export default Notification;