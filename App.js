import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameProvider } from './hook/GameContext';

export default function App() {
  return (
    <GameProvider>
        <View style={styles.container}>
        </View>
    </GameProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});