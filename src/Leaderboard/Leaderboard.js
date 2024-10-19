import React from 'react';

const Leaderboard = ({ leaderboard }) => {
    return (
        <div className="leaderboard">
            <h2>Таблица с резултати</h2>
            <table>
                <thead>
                    <tr>
                        <th>Име</th>
                        <th>Победи</th>
                        <th>Загуби</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.wins}</td>
                            <td>{entry.losses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;