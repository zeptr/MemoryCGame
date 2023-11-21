import React from 'react';
import { GameProvider } from './hook/GameContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <StatusBar hidden={true} />
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Home' component={HomeScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
    
  );
}
