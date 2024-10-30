import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/styles';

const AddWorkout = ({ addWorkout, unit }) => {
  const [type, setType] = useState('Running');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleAddWorkout = () => {
    if (isNaN(distance) || isNaN(duration) || distance < 0 || duration < 0) {
      return Alert.alert('Invalid input', 'Distance and duration must be positive numbers.');
    }

    addWorkout({ type, distance: parseFloat(distance), duration: parseFloat(duration), date });
    setDistance('');
    setDuration('');
    setDate(new Date().toISOString().split('T')[0]);
    setCalendarVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Workout Type:</Text>
      <Picker selectedValue={type} style={styles.picker} onValueChange={itemValue => setType(itemValue)}>
        <Picker.Item label="Running" value="Running" />
        <Picker.Item label="Cycling" value="Cycling" />
        <Picker.Item label="Skiing" value="Skiing" />
      </Picker>

      <Text style={styles.label}>Distance ({unit}):</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={distance} onChangeText={setDistance} />

      <Text style={styles.label}>Duration (minutes):</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={duration} onChangeText={setDuration} />

      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={() => setCalendarVisible(true)}>
        <Text style={styles.input}>{date}</Text>
      </TouchableOpacity>

      {isCalendarVisible && (
        <View>
          <Calendar
            onDayPress={day => {
              setDate(day.dateString);
              setCalendarVisible(false);
            }}
            markedDates={{
              [date]: { selected: true, marked: true, selectedColor: 'blue' },
            }}
            theme={{
              selectedDayBackgroundColor: 'blue',
              todayTextColor: 'red',
              arrowColor: 'blue',
            }}
          />
        </View>
      )}

      <View style={{ height: 35 }} />

      <Button title="Add Workout" onPress={handleAddWorkout} />
    </View>
  );
};

export default AddWorkout;
