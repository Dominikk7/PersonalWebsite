import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoordinateDisplay = ({ x, y, z }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>X: {x.toFixed(2)}</Text>
      <Text style={styles.text}>Y: {y.toFixed(2)}</Text>
      <Text style={styles.text}>Z: {z.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    marginBottom: 5,
  },
});

export default CoordinateDisplay;