import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {Avatar} from 'react-native-paper';

export const UserItem = ({item}) => {
  return (
    <List.Item
      title={item.name}
      description={item.position}
      left={props => (
        <Avatar.Image {...props} size={40} style={styles.avatar} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginTop: 8,
    marginRight: 16,
  },
});
