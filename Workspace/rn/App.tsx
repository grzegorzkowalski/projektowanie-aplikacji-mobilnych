import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DateDisplay from "./components/DateDisplay";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! :)</Text>
      {/*<Text>{new Date().toLocaleDateString()}</Text>*/}
        <DateDisplay />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
