import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

const Scoreboard = ({ playerXScore, playerOScore }) => {
    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <div className="scores">
                <div className="score">
                    <span>Player X:</span>
                    <span>{playerXScore}</span>
                </div>
                <div className="score">
                    <span>Player O:</span>
                    <span>{playerOScore}</span>
                </div>
            </div>
        </div>
    );
};

Scoreboard.propTypes = {
    playerXScore: PropTypes.number.isRequired,
    playerOScore: PropTypes.number.isRequired,
};

export default Scoreboard;