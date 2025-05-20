
import { StyleSheet, Text, View } from 'react-native';
import { Estate } from './Framework/Screens/Estate.js';
import GroupList from './Framework/Screens/GroupList.js';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Estate/> */}
    <GroupList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
