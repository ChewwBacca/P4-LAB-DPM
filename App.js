import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground } from 'react-native';
import ScoreDisplay from './components/ScoreDisplay';
import ScoreControls from './components/ScoreControls';
import ResetButton from './components/ResetButton';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "Team A";
  const teamB = "Team B";

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamA} MENANG🥳🥳🥳!`);
      }
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamB} MENANG🥳🥳🥳!`);
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A') {
      setScoreA(scoreA > 0 ? scoreA - 1 : 0);
    } else {
      setScoreB(scoreB > 0 ? scoreB - 1 : 0);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <ImageBackground
      source={require('./assets/field.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>PAPAN SKOR</Text>

        <ScoreDisplay teamName={teamA} score={scoreA} />
        <ScoreControls 
          onIncrease={() => increaseScore('A')} 
          onDecrease={() => decreaseScore('A')} 
        />

        <ScoreDisplay teamName={teamB} score={scoreB} />
        <ScoreControls 
          onIncrease={() => increaseScore('B')} 
          onDecrease={() => decreaseScore('B')} 
        />

        <ResetButton onReset={resetScores} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});