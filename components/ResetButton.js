import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ResetButton({ onReset }) {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onReset}>
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
