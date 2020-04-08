import React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const Loading = () => {
  return <ActivityIndicator animating={true} style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 16,
  },
});
