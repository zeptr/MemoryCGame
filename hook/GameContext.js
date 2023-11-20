import React, {createContext, useState} from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [cards, setCards] = useState([]); 
    const [isGameActive, setIsGameActive] = useState(false); 
    const [flippedCards, setFlippedCards] = useState([]); 
    const [matchedPairs, setMatchedPairs] = useState([]); 

    const initializeGame = () => {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let deck = [];

        // Create a deck of cards
        suits.forEach(suit => {
            ranks.forEach(rank => {
                deck.push({ suit, rank, isFlipped: false, isMatched: false });
            });
        });

        // Fisher-Yates Shuffle Algorithm
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        setCards(deck);
        setIsGameActive(true);
        setFlippedCards([]);
        setMatchedPairs([]);
    };

    const flipCard = () => {
        
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