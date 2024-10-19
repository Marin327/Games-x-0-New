import React from 'react';
import '../App.css';

const ThemeSwitcher = ({ onToggleTheme }) => (
    <button className="theme-switcher" onClick={onToggleTheme}>
        Toggle Theme
    </button>
);

export default ThemeSwitcher;