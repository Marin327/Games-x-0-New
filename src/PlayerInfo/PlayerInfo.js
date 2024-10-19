import React from 'react';
import '../App.css';

const PlayerInfo = ({ player }) => (
    <div className='player-info'>
        <h2>Currect Player: {player}</h2>
    </div>
);

export default PlayerInfo;