import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { GameProvider } from './hook/GameContext';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import WinnerScreen from './screens/WinnerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="WinnerScreen" component={WinnerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>

  );
}
