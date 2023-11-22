# Memory Game

## Description

Memory Game is a classic card matching game designed to test and improve memory skills. Developed using React Native, this application offers an engaging and interactive way to enjoy a simple yet challenging game. The game features a deck of cards, including two special Jokers, for a unique gameplay twist.

## Features

- **Interactive Gameplay:** Players flip cards to find matching pairs, including standard suits and special Jokers.
- **Score Tracking:** Tracks scores for two players throughout the game.
- **Turn-based Mechanics:** Alternates turns between two players for a competitive edge.
- **Endgame Logic:** Detects when all cards are matched and declares a winner based on scores.
- **Responsive Design:** Optimized for a variety of device sizes and orientations.

## Installation

To set up the Memory Game on your local machine, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/zeptr/MemoryCGame.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd MemoryCGame
   ```

3. **Install Dependencies:**
   ```bash
   yarn
   ```

4. **Run the Application:**
   ```bash
   yarn start
   ```

## Usage

After launching the game, players take turns flipping cards to find matching pairs. The game continues until all pairs are matched, and the player with the highest score wins.

## Technologies Used

- React Native
- Expo
- JavaScript

## Notes

- **Testing Limitations:** Due to time constraints, comprehensive testing of the software was not feasible. 
- **Platform-Specific Testing:** The application was only tested on an Android emulator. Developers aiming to run this on an iOS device might need to use an emulator, as the iOS build was not tested due to issues with the Xcode iOS file.
- **Linting:** Linting was incorporated later in the development process than ideal, which should be considered for maintaining a consistent coding style.
- **Two-Player Support:** Currently, the game only supports matches between two players.

## Improvements

- **Cross-Platform Compatibility:** Future improvements should ensure iOS compatibility, given the current limitations due to software issues.
- **Going Live:** Consider deploying the application for easier access and widespread testing.

## License

This project is licensed under the [MIT License](LICENSE.md).

