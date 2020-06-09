import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChannelContainer from '../features/channel/container/ChannelContainer';
import CommunicationContainer from '../features/communication/container/CommunicationContainer';
import UserContainer from '../features/user/container/UserContainer';
import ContactContainer from '../features/contact/container/ContactContainer';
import IncomingCallContainer from '../features/incomingCall/container/IncomingCallContainer';

const App = (props) => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator headerMode="screen">
      {/* <stack.Screen name={'User'} component={CommunicationContainer} /> */}
      <stack.Screen name={'User'} component={UserContainer} />
      <stack.Screen
        name={'Contact'}
        component={ContactContainer}
        options={{headerShown: false}}
      />
      <stack.Screen
        name={'VideoConference'}
        component={CommunicationContainer}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};

export default App;
