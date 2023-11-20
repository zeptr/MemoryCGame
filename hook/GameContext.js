import React, {createContext, useState} from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [cards, setCards] = useState([]); 
    const [isGameActive, setIsGameActive] = useState(false); 
    const [flippedCards, setFlippedCards] = useState([]); 
    const [matchedPairs, setMatchedPairs] = useState([]); 

    const initializeGame = () => {
        
        setIsGameActive(true);
    };

    const flipCard = cardId => {
        
    };

    const resetGame = () => {
        
        setCards([]);
        setIsGameActive(false);
        setFlippedCards([]);
        setMatchedPairs([]);
    };

    return (
        <GameContext.Provider value={{ cards, isGameActive, flippedCards, matchedPairs, initializeGame, flipCard, resetGame }}>
            {children}
        </GameContext.Provider>
    );
}