import React from 'react';

const Statistics = ({ playerXScore, playerOScore }) => {
    return (
        <div className="statistics">
            <h2>Game Statistics</h2>
            <p>Player X Score: {playerXScore}</p>
            <p>Player O Score: {playerOScore}</p>
        </div>
    );
};

export default Statistics;