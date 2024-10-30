// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddWorkout from './screens/AddWorkout';
import WorkoutHistory from './screens/WorkoutHistory';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [unit, setUnit] = useState('kilometers');

  // Alustetaan data AsyncStoragesta sovelluksen käynnistyessä
  useEffect(() => {
    const loadData = async () => {
      const savedWorkouts = await AsyncStorage.getItem('workouts');
      const savedUnit = await AsyncStorage.getItem('unit');
      if (savedWorkouts) setWorkouts(JSON.parse(savedWorkouts));
      if (savedUnit) setUnit(savedUnit);
    };
    loadData();
  }, []);

  // Tallentaa treenit aina, kun workouts-tila päivittyy
  useEffect(() => {
    AsyncStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  // Tallentaa yksikköasetuksen aina, kun unit-tila päivittyy
  useEffect(() => {
    AsyncStorage.setItem('unit', unit);
  }, [unit]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add Workout">
          {(props) => (
            <AddWorkout {...props} addWorkout={addWorkout} unit={unit} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Workout History">
          {(props) => (
            <WorkoutHistory {...props} workouts={workouts} setWorkouts={setWorkouts} unit={unit} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {(props) => <Settings {...props} unit={unit} setUnit={setUnit} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
