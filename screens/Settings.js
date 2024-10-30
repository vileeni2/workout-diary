import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const Settings = ({ unit, setUnit }) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsTitle}>Choose unit:</Text>
      
      <View style={styles.settingsButtonContainer}>
        <TouchableOpacity
          style={[styles.settingsButton, unit === 'kilometers' && styles.selectedSettingsButton]}
          onPress={() => setUnit('kilometers')}
        >
          <Text style={styles.settingsButtonText}>Kilometers</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.settingsButton, unit === 'miles' && styles.selectedSettingsButton]}
          onPress={() => setUnit('miles')}
        >
          <Text style={styles.settingsButtonText}>Miles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
