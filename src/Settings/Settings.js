import React from 'react';
import '../App.css';

const Settings = ({ onSettingsChange }) => (
    <div className="settings">
        <button onClick={() => onSettingsChange('easy')}>Easy</button>
        <button onClick={() => onSettingsChange('hard')}>Hard</button>
    </div>
);
export default Settings;
