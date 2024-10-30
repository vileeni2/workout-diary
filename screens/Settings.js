// screens/Settings.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

const Settings = ({ unit, setUnit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose unit:</Text>
      <Button title="Kilometers" onPress={() => setUnit('kilometers')} />
      <Button title="Miles" onPress={() => setUnit('miles')} />
    </View>
  );
};

export default Settings;
