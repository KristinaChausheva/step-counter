import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState(+0)
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="change" onPress={() => {setOutputText(outputText + 1)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'red',
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
