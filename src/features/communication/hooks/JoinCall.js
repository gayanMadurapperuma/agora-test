import {useEffect, useState} from 'react';
import {RtcEngine} from 'react-native-agora';
import {useCall} from './callConnector';

export const useJoinCall = ({channelName, uid, fcmToken}) => {
  const [joinSucceed, setJoinSucceed] = useState(false);
  const [callStatus, setCallStatus] = useCall({
    token: fcmToken,
    channel: channelName,
  });
  useEffect(() => {
    console.log('joining call');
    const joinCall = async () => {
      try {
        RtcEngine.joinChannel(channelName, uid);
        RtcEngine.enableAudio();
        setJoinSucceed(true);
        setCallStatus({token: fcmToken, channel: channelName});
        setJoinSucceed(true);
      } catch (error) {
        console.log(error);
        setJoinSucceed(false);
      }
    };
    joinCall();
  }, []);
  return [joinSucceed, callStatus];
};
