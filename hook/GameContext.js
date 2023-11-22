import React, {createContext, useState} from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [cards, setCards] = useState([]); 
    const [isGameActive, setIsGameActive] = useState(false); 
    const [flippedCards, setFlippedCards] = useState([]); 
    const [matchedPairs, setMatchedPairs] = useState([]);

    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

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
        deck.push({suit:'Joker', rank: 'Red', isFlipped: false, isMatched: false });
        deck.push({suit:'Joker', rank: 'Black', isFlipped: false, isMatched: false });

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

    const flipCard = (flippedCard) => {
        let matchFound = false;
        const currentIdentifier = `${flippedCard.rank}_${flippedCard.suit}`;
    
        if (flippedCards.length === 1) {
            const previousCard = flippedCards[0];
            const previousIdentifier = `${previousCard.rank}_${previousCard.suit}`;
    
            if (flippedCard.rank === previousCard.rank && ((flippedCard.suit === "Hearts" && previousCard.suit === "Diamonds") || 
                (flippedCard.suit === "Diamonds" && previousCard.suit === "Hearts") ||
                (flippedCard.suit === "Clubs" && previousCard.suit === "Spades") ||
                (flippedCard.suit === "Spades" && previousCard.suit === "Clubs")) || 
                (flippedCard.rank === 'Joker' && previousCard.rank === 'Joker')) {
    
                matchFound = true;
                setMatchedPairs([...matchedPairs, currentIdentifier, previousIdentifier]);
                setFlippedCards([]);
            }
        }
    
        if (!matchFound) {
            setFlippedCards(flippedCards.length === 1 ? [] : [flippedCard]);
        }
    
        setCards(cards.map(card => {
            const cardIdentifier = `${card.rank}_${card.suit}`;
            if (cardIdentifier === currentIdentifier) {
                return { ...card, isFlipped: true, isMatched: matchFound };
            } else if (!matchFound && flippedCards.length === 1 && cardIdentifier === previousIdentifier) {
                return { ...card, isFlipped: false };
            }
            return card;
        }));
    };
    
    const resetGame = () => {
        
        setCards([]);
        setIsGameActive(false);
        setFlippedCards([]);
        setMatchedPairs([]);
    };

    return (
        <GameContext.Provider value={{ cards, isGameActive, flippedCards, matchedPairs, player1Name, player2Name, player1Score, player2Score, setPlayer1Name, setPlayer2Name, setPlayer1Score, setPlayer2Score, initializeGame, flipCard, resetGame }}>
            {children}
        </GameContext.Provider>
    );
}