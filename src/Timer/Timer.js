import React, { useEffect, useState } from 'react';
import '../App.css';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Timer: {seconds}s</h2>
        </div>
    );
};

export default Timer;