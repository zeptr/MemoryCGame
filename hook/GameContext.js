import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isGameActive, setIsGameActive] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (flippedCards.length === 2) {
      const matchFound = checkMatch(flippedCards);

      if (!matchFound) {
        setFlippingBack(true);
        const timeoutId = setTimeout(() => {
          setCards(cards.map((card) => {
            if (!card.isMatched) {
              return { ...card, isFlipped: false };
            }
            return card;
          }));
          setFlippedCards([]);
          setFlippingBack(false);
          setIsPlayer1Turn(!isPlayer1Turn); // Toggle turn after both cards have been flipped back
        }, 500); // Adjust delay as needed

        return () => clearTimeout(timeoutId);
      }

      if (matchFound) {
        checkForGameEnd(); // Call the function after a match is found
      }
    }
  }, [flippedCards, cards]);

  const initializeGame = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = [];

    // Create a deck of cards
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        deck.push({
          suit, rank, isFlipped: false, isMatched: false,
        });
      });
    });
    deck.push({
      suit: 'Joker', rank: 'Red', isFlipped: false, isMatched: false,
    });
    deck.push({
      suit: 'Joker', rank: 'Black', isFlipped: false, isMatched: false,
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

  const [flippingBack, setFlippingBack] = useState(false);

  const flipCard = (flippedCard) => {
    if (flippedCards.length === 2 || flippingBack) return;

    const currentIdentifier = `${flippedCard.rank}_${flippedCard.suit}`;

    setCards(cards.map((card) => {
      const cardIdentifier = `${card.rank}_${card.suit}`;
      if (cardIdentifier === currentIdentifier) {
        return { ...card, isFlipped: true };
      }
      return card;
    }));

    const newFlippedCards = [...flippedCards, flippedCard];
    setFlippedCards(newFlippedCards);
  };

  const checkMatch = (flippedCards) => {
    // console.log("Checking match for cards:", flippedCards); // Debugging line
    let matchFound = false;
    if (flippedCards.length === 2) {
      if ((flippedCards[0].rank === flippedCards[1].rank && ((flippedCards[0].suit === 'Hearts' && flippedCards[1].suit === 'Diamonds')
                 || (flippedCards[0].suit === 'Diamonds' && flippedCards[1].suit === 'Hearts')
                 || (flippedCards[0].suit === 'Clubs' && flippedCards[1].suit === 'Spades')
                 || (flippedCards[0].suit === 'Spades' && flippedCards[1].suit === 'Clubs')))
                 || (flippedCards[0].suit === 'Joker' && flippedCards[1].suit === 'Joker')) {
        // console.log("flip0", flippedCards[0]);
        // console.log("flip1", flippedCards[1]);

        matchFound = true;
        setMatchedPairs([...matchedPairs, flippedCards[0], flippedCards[1]]);
        setFlippedCards([]);

        if (isPlayer1Turn) {
          setPlayer1Score(player1Score + 10);
        } else {
          setPlayer2Score(player2Score + 10);
        }

        // Update the cards state to mark the matched cards
        setCards((currentCards) => currentCards.map((card) => {
          // console.log(flippedCards[0]);
          if ((card.suit === flippedCards[0].suit && card.rank === flippedCards[0].rank) || (card.suit === flippedCards[1].suit && card.rank === flippedCards[1].rank)) {
            return { ...card, isMatched: true };
          }
          // console.log(card)
          return card;
        }));
      }
    }

    return matchFound;
  };

  const resetGame = () => {
    initializeGame();
    setIsPlayer1Turn(true);
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  const checkForGameEnd = () => {
    const allMatched = cards.every((card) => (card.isMatched === true));
    if (allMatched) {
      let winnerName = '';
      if (player1Score > player2Score) {
        winnerName = player1Name;
      } else if (player2Score > player1Score) {
        winnerName = player2Name;
      } else {
        winnerName = 'Draw'; // In case of a tie
      }

      setWinner(winnerName);
      setIsGameActive(false);
    }
  };

  return (
    <GameContext.Provider value={{
      cards, isGameActive, flippedCards, matchedPairs, player1Name, player2Name, player1Score, player2Score, isPlayer1Turn, winner, setPlayer1Name, setPlayer2Name, setPlayer1Score, setPlayer2Score, initializeGame, flipCard, resetGame,
    }}
    >
      {children}
    </GameContext.Provider>
  );
}
