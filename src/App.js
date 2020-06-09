/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidStyle} from '@notifee/react-native';
import {useChannel} from './utils/hooks/createChannel';
import {useActions} from './utils/hooks/pressActions';
import Navigator from './navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const chennel = useChannel();
  useActions();
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      notifee.displayNotification({
        title: 'Gayan madurapperuma',
        subtitle: 'Incoming Call',
        android: {
          vibrationPattern: [300, 500],
          ongoing: true,
          channelId: 'CALLS_INCOMING',
          color: '#4caf50',
          actions: [
            {
              title: 'Answer',
              pressAction: {id: 'answer'},
            },
            {
              title: 'Decline',
              pressAction: {id: 'decline'},
            },
          ],
        },
      });
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// java -jar "/home/gayan/Documents/Softwares/bundletool-all-0.9.0.jar" build-apks --bundle=/home/gayan/Documents/My_work/React-native/agroTest/android/app/build/outputs/bundle/release/app-release.aab --output=/home/gayan/Documents/My_work/React-native/agroTest/app.apks

export default App;
