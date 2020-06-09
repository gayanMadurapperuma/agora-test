import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './NavigationStack';

const App = (props) => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
