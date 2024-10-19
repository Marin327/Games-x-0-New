import React, { useEffect, useState } from 'react';
import Square from './Square';

const Board = ({ updateScores, resetGame }) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    useEffect(() => {
        // Нулирайте играта, когато получим сигнал за нулиране
        if (resetGame) {
            setSquares(Array(9).fill(null));
            setIsXNext(true);
        }
    }, [resetGame]);

    const handleClick = (index) => {
        const newSquares = squares.slice();

        // Проверка дали квадратът вече е зает или играта е завършила
        if (squares[index] || calculateWinner(squares)) {
            return;
        }

        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);

        const winner = calculateWinner(newSquares);
        if (winner) {
            updateScores(winner);
        }
    };

    const renderSquare = (index) => {
        return (
            <Square
                value={squares[index]}
                onClick={() => handleClick(index)}
            />
        );
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;