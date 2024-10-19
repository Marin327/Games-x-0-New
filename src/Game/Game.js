import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import { fetchGameData, sendResultToServer } from '../services/serverApi'; // Импортиране на сервизни функции

const Game = ({ updateScores, resetGame }) => {
    const [gameData, setGameData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Извличане на данни от сървъра при монтиране на компонента
    useEffect(() => {
        const loadGameData = async () => {
            try {
                const data = await fetchGameData();
                setGameData(data);
            } catch (error) {
                console.error('Error fetching game data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadGameData();
    }, []);

    // Функция за обработка на резултатите
    const handleSubmitResult = async (result) => {
        try {
            await sendResultToServer(result);
            console.log('Result submitted successfully');
        } catch (error) {
            console.error('Error submitting result:', error);
        }
    };

    // Примерна функция, която ще бъде извикана при завършване на играта
    const onGameEnd = (scores) => {
        updateScores(scores);
        handleSubmitResult(scores); // Изпращане на резултата на сървъра
        resetGame(); // Ресетиране на играта
    };

    if (loading) {
        return <p>Loading game data...</p>;
    }

    return (
        <div className="game">
            <h1>React Game</h1>
            {gameData && <p>Game Name: {gameData.name}</p>}
            <Board updateScores={onGameEnd} resetGame={resetGame} />
        </div>
    );
};

export default Game;