import React, {useEffect, useState, useCallback} from 'react';
import {Text, NativeModules} from 'react-native';
import {RtcEngine, AgoraView} from 'react-native-agora';
import {useNavigation} from '@react-navigation/native';
import {usePermission, useLocaVideo, useCall} from '../hooks';
import VideoView from '../component/VideoView';
import VideoConference from '../component/VideoConference';

const {Agora} = NativeModules; //Define Agora object as a native module

const {FPS30, AudioProfileDefault, AudioScenarioDefault, Adaptative} = Agora; //Set defaults for Stream

const config = {
  //Setting config of the app
  appid: 'a9fdd628eb8843509145b6f142a7b4bb', //Enter the App ID generated from the Agora Website
  channelProfile: 0, //Set channel profile as 0 for RTC
  videoEncoderConfig: {
    //Set Video feed encoder settings
    width: 720,
    height: 1080,
    bitrate: 1,
    frameRate: FPS30,
    orientationMode: Adaptative,
  },
  audioProfile: AudioProfileDefault,
  audioScenario: AudioScenarioDefault,
};

const CommunicationContainer = ({route, navigation}) => {
  const {channelName, fcmToken} = route.params;
  const navigationHooks = useNavigation();
  const [callSent, setCallSent] = useState(false);
  console.log(channelName, fcmToken);
  const granted = usePermission();
  // const isEnabled = useLocaVideo();
  const [agoraConfig, setAgoraConfig] = useState({
    peerIds: [], //Array for storing connected peers
    uid: Math.floor(Math.random() * 100), //Generate a UID for local user
    appid: config.appid,
    channelName, //Channel Name for the current session
    joinSucceed: false, //State variable for storing success
  });
  console.log(agoraConfig);
  const [callStatus, setCallStatus] = useCall({
    token: fcmToken,
    channel: channelName,
  });
  console.log(callStatus);

  useEffect(() => {
    RtcEngine.on('userJoined', (data) => {
      const {peerIds} = agoraConfig; //Get currrent peer IDs
      if (peerIds.indexOf(data.uid) === -1) {
        //If new user has joined
        setAgoraConfig({
          ...agoraConfig,
          peerIds: [...peerIds, data.uid],
        });
      }
    });
    RtcEngine.on('userOffline', (data) => {
      //If user leaves
      setAgoraConfig({
        ...agoraConfig,
        peerIds: agoraConfig.peerIds.filter((uid) => uid !== data.uid),
      });
    });
    RtcEngine.on('joinChannelSuccess', (data) => {
      //If Local user joins RTC channel
      console.log('JOIN CHANNEL SUCCESS');
      console.log('callSent', callSent);
      setCallSent(true);
      if (!callSent) {
        setCallStatus({
          token: fcmToken,
          channel: channelName,
        });
      }
      RtcEngine.startPreview(); //Start RTC preview
      setAgoraConfig({
        ...agoraConfig,
        joinSucceed: true,
      });
      return;
    });
    RtcEngine.on('leaveChannel', (data) => {
      console.log('leaveChannel');
      navigationHooks.navigate('Contact');
      return;
    });
    RtcEngine.init(config);
    console.log('useEffect');
    if (!callSent && callStatus !== 1) {
      startCall(agoraConfig.channelName, agoraConfig.uid);
    }
    // if (callStatus !== 1) {
    //   startCall();
    // }
  }, [agoraConfig]);

  const startCall = useCallback((channel, uid) => {
    console.log('join call', channel, uid);
    RtcEngine.joinChannel(channel, uid); //Join Channel
    RtcEngine.enableAudio(); //Enable the audio
  }, []);

  const endCall = useCallback(() => {
    RtcEngine.leaveChannel();
    setAgoraConfig({
      ...agoraConfig,
      peerIds: [],
      joinSucceed: false,
    });
    // navigationHooks.navigate('Contact');
  }, [agoraConfig]);

  return (
    <>
      <VideoView
        agoraConfig={agoraConfig}
        startCall={startCall}
        endCall={endCall}
      />
      {/* <VideoConference agoraConfig={agoraConfig} /> */}
    </>
  );
};

export default CommunicationContainer;
