import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Count {count}</Text>
      <Button title='Add' onPress={() => setCount(count + 1)} />
      <Button title='Remove' onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },

  text: {
    fontSize: 24,
    marginBottom:20,
  },

  button: {
    margin: 10,
  },
});