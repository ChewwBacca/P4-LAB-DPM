import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreDisplay({ teamName, score }) {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  teamContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  teamName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    color: 'white',
    fontSize: 36,
    marginVertical: 10,
  },
});