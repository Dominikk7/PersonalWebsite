import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./home";

export default function App() {
  return (
    <View style={styles.outer}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
});