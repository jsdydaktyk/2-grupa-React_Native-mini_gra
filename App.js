
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './GUI/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient' ;

export default function App() {

  



  return (
    <LinearGradient colors={['#f8e7ff', '#2bb1b7']} style={styles.mainContainer}>
      <ImageBackground source={require('./assets/dices.jpg')} 
                       resizeMode="cover" 
                       style={styles.mainContainer} 
                       imageStyle={ { opacity: 0.3}}
                       
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1       
  }
})