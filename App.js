import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateHeartRateLimits = () => {
    const ageNumber = parseInt(age, 10);

    if (isNaN(ageNumber) || ageNumber <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid age.');
      return;
    }

    const lower = Math.round((220 - ageNumber) * 0.65);
    const upper = Math.round((220 - ageNumber) * 0.85);

    setLimits(`${lower}-${upper}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter age"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.label}>Limits</Text>
      <Text style={styles.limits}>{limits}</Text>
      <Button title="CALCULATE" onPress={calculateHeartRateLimits} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  limits: {
    fontSize: 20,
    marginVertical: 16,
    color: 'green',
  },
});

