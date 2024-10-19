import React, { useEffect } from 'react';

const SoundEffects = ({ soundEnabled }) => {
    const clickSound = new Audio('/sounds/click.mp3');
    const winSound = new Audio('/sounds/win.mp3');

    useEffect(() => {
        if (soundEnabled) {
            clickSound.volume = 0.1;
            winSound.volume = 0.1;
        }
    }, [soundEnabled]);

    const playClickSound = () => {
        if (soundEnabled) clickSound.play();
    };

    const playWinSound = () => {
        if (soundEnabled) winSound.play();
    };

    return (
        <div>
            <button onClick={playClickSound}>Клик</button>
            <button onClick={playWinSound}>Победа</button>
        </div>
    );
};

export default SoundEffects;