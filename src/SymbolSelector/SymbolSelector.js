import React, { useState } from 'react';

const SymbolSelector = ({ onSelectSymbol }) => {
    const [selectedSymbol, setSelectedSymbol] = useState('X');

    const handleSelect = (symbol) => {
        setSelectedSymbol(symbol);
        onSelectSymbol(symbol);
    };

    return (
        <div className="symbol-selector">
            <h2>Избор на символ</h2>
            <button onClick={() => handleSelect('X')}>X</button>
            <button onClick={() => handleSelect('O')}>O</button>
            <button onClick={() => handleSelect('😊')}>😊</button>
            <button onClick={() => handleSelect('😎')}>😎</button>
            <p>Избран символ: {selectedSymbol}</p>
        </div>
    );
};

export default SymbolSelector;