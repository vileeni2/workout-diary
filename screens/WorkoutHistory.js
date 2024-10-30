// screens/WorkoutHistory.js
import React from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const WorkoutHistory = ({ workouts, setWorkouts, unit }) => {
  // Laskee eri treenityyppien yhteenlasketut matkat
  const calculateTotalDistance = (type) =>
    workouts
      .filter(workout => workout.type === type)
      .reduce((sum, workout) => sum + workout.distance, 0)
      .toFixed(2);

  // Tyhjentää treenihistorian
  const clearHistory = async () => {
    Alert.alert(
      "Clear History",
      "Are you sure you want to clear the workout history?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "OK", 
          onPress: async () => {
            await AsyncStorage.removeItem('workouts');
            setWorkouts([]); // Päivittää workout-tilan tyhjäksi
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total distances:</Text>
      <Text>Running: {calculateTotalDistance('Running')} {unit}</Text>
      <Text>Cycling: {calculateTotalDistance('Cycling')} {unit}</Text>
      <Text>Skiing: {calculateTotalDistance('Skiing')} {unit}</Text>

      {/* Lisää Tyhjennä Historia -painike */}
      <Button title="Clear History" onPress={clearHistory} color="#ff4444" />

      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Type: {item.type}</Text>
            <Text>Distance: {item.distance} {unit}</Text>
            <Text>Duration: {item.duration} minutes</Text>
            <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default WorkoutHistory;
