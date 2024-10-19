import React, { useState } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Footer from './Footer/Footer';
import Game from './Game/Game';
import GameHistory from './GameHistory/GameHistory';
import Header from './Header/Header.js';
import Leaderboard from './Leaderboard/Leaderboard';
import Notification from './Notification/Notification';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import ResetButton from './ResetButton/ResetButton';
import Scoreboard from './Scoreboard/Scoreboard';
import Settings from './Settings/Settings';
import Statistics from './Statistics/Statistics';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Timer from './Timer/Timer';
const App = () => {
  const [player, setPlayer] = useState("X");
  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [notification, setNotification] = useState("Welcome to the game!");

  const [leaderboard, setLeaderboard] = useState([]);

  const handleReset = () => {
    setPlayer("X");
    setHistory([]);
    setNotification("Game has been reset!");
  };

  const handleSettingsChange = (difficulty) => {
    setNotification(`Difficulty set to ${difficulty}`);
  };

  const handleToggleTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  const updateLeaderboard = () => {
    const newEntry = {
      name: `Player X`,
      wins: playerXScore,
      losses: playerOScore
    };
    setLeaderboard(prev => [...prev, newEntry]);
  };

  return (
    <ErrorBoundary>
      <div className="app">
        <Header />
        <PlayerInfo player={player} />
        <Scoreboard playerXScore={playerXScore} playerOScore={playerOScore} />
        <Statistics playerXScore={playerXScore} playerOScore={playerOScore} />
        <Leaderboard leaderboard={leaderboard} />
        <ResetButton onReset={handleReset} />
        <GameHistory history={history} />
        <Timer />
        <Settings onSettingsChange={handleSettingsChange} />
        <ThemeSwitcher onToggleTheme={handleToggleTheme} />
        <Notification message={notification} />
        <Game
          updateScores={(scores) => {
            setPlayerXScore(scores.playerX);
            setPlayerOScore(scores.playerO);
            updateLeaderboard();
          }}
          resetGame={handleReset}
        />
        <Footer />
      </div >
    </ErrorBoundary>
  );
};

export default App;