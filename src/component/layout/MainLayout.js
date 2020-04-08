import React from 'react';
import {Appbar} from 'react-native-paper';

export const MainLayout = ({title, subtitle, children}) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content {...{title, subtitle}} />
      </Appbar.Header>
      {children}
    </>
  );
};
