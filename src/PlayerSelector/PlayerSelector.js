import React from 'react';

const PlayerSelector = ({ currentPlayer, onSelectPlayer }) => {
    return (
        <div className="player-selector">
            <p>Select Player:</p>
            <button
                className={currentPlayer === 'X' ? 'active' : ''}
                onClick={() => onSelectPlayer('X')}
            >
                X
            </button>
            <button
                className={currentPlayer === 'O' ? 'active' : ''}
                onClick={() => onSelectPlayer('O')}
            >
                O
            </button>
        </div>
    );
};

export default PlayerSelector;