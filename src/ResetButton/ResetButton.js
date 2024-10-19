import React from 'react';
import '../App.css';

const ResetButton = ({ onReset }) => (
    <button className="reset-button" onCLick={onReset}>
        Reset Game
    </button>
);

export default ResetButton;