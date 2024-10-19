import React from 'react';

const Achievements = ({ achievements }) => {
    return (
        <div className="achievements">
            <h2>Постижения</h2>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>
                        {achievement.name} - {achievement.completed ? "✔️" : "❌"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Achievements;