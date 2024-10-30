import React from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';
import { toMiles, toKilometers } from '../constants/utils';

const WorkoutHistory = ({ workouts, setWorkouts, unit }) => {

  //Muunnetaan etäisyys valitun yksikön mukaan
  const formatDistance = (distance) => {
    return unit === 'miles' ? toMiles(distance) : distance;
  };

  // Laskee eri treenityyppien yhteenlasketut matkat
  const calculateTotalDistance = (type) =>
    workouts
      .filter(workout => workout.type === type)
      .reduce((sum, workout) => sum + formatDistance(workout.distance), 0)
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
      <Text style={styles.distanceItem}>Running: {calculateTotalDistance('Running')} {unit}</Text>
      <Text style={styles.distanceItem}>Cycling: {calculateTotalDistance('Cycling')} {unit}</Text>
      <Text style={styles.distanceItem}>Skiing: {calculateTotalDistance('Skiing')} {unit}</Text>

      {/* Tyhjennä historia */}
      <View style={styles.buttonContainer}>
        <Button title="Clear History" onPress={clearHistory} color="#ff4444" />
      </View>

      <Text style={styles.title}>Workouts:</Text>

      {workouts.length === 0 ? (
        <Text style={styles.placeholderText}>Your added workouts will appear here.</Text>
      ) : (
        <FlatList
          data={workouts}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>Type: {item.type}</Text>
              <Text>Distance: {formatDistance(item.distance).toFixed(2)} {unit}</Text>
              <Text>Duration: {item.duration} minutes</Text>
              <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default WorkoutHistory;
