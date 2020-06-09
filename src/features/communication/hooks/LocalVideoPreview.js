import {useEffect, useState} from 'react';
import {RtcEngine} from 'react-native-agora';

export const useLocaVideo = (isEnabled = true) => {
  const [localVideoEnabled, setLocalVideoEnabled] = useState(false);
  useEffect(() => {
    const enableLocalVideo = async () => {
      try {
        await RtcEngine.enableLocalVideo(isEnabled);
        await RtcEngine.enableLocalAudio(isEnabled);
        setLocalVideoEnabled(true);
      } catch (error) {
        console.log(error);
        setLocalVideoEnabled(false);
      }
    };
    enableLocalVideo();
  }, [isEnabled]);
  return localVideoEnabled;
};
