import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export function ErrorView({title, message, buttonText, onButtonPress}) {
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.message}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <Button mode="contained" onPress={onButtonPress}>
        {buttonText}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 8,
    margin: 12,
  },

  title: {
    marginBottom: 8,
  },
  titleText: {
    fontSize: 20,
  },
  message: {
    fontSize: 15,
    marginBottom: 16,
  },
  messageText: {},
});
