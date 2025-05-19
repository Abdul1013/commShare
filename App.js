
import { StyleSheet, Text, View } from 'react-native';
import { Estate } from './Framework/Screens/Estate.js';

export default function App() {
  return (
    <View style={styles.container}>
    <Estate/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
