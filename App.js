import React from 'react';
import { GameProvider } from './hook/GameContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                
            </Stack.Navigator>
        </NavigationContainer>
    </GameProvider>
    
  );
}
