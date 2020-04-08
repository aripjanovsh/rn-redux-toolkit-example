import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {UsersContainer} from './UsersContainer';

export const AppContainer = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <UsersContainer />
      </PaperProvider>
    </Provider>
  );
};
