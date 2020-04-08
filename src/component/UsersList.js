import React from 'react';
import {FlatList} from 'react-native';
import {UserItem} from './UserItem';

const UsersList = ({hits, ...props}) => {
  return (
    <FlatList
      {...props}
      data={hits}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <UserItem item={item} />}
    />
  );
};

export const UsersListContainer = React.memo(UsersList);
