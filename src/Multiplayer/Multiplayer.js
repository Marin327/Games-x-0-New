import React, { useState } from 'react';

const Multiplayer = ({ startGame }) => {
    const [roomCode, setRoomCode] = useState('');

    const createRoom = () => {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        setRoomCode(code);
        startGame(code);
    };

    const joinRoom = () => {
        startGame(roomCode);
    };

    return (
        <div className="multiplayer">
            <h2>Мултиплейър режим</h2>
            <button onClick={createRoom}>Създаване на стая</button>
            <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                placeholder="Въведете код на стая"
            />
            <button onClick={joinRoom}>Присъединяване</button>
        </div>
    );
};

export default Multiplayer;