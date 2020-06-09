eimport {useEffect, useState} from 'react';
import notifee, {Importance} from '@notifee/react-native';

export const useChannel = () => {
  const [chennelCreated, setChannelCreated] = useState(false);
  useEffect(() => {
    const createChennel = async () => {
      try {
        await notifee.createChannel({
          id: 'CALLS_INCOMING',
          name: 'Incoming Calls',
          sound: 'intheend',
          lights: false,
          vibration: true,
          ongoing: true,
          importance: Importance.HIGH,
        });
        setChannelCreated(true);
      } catch (error) {
        console.warn(error);
        setChannelCreated(false);
      }
    };
    createChennel();
  }, []);
  return chennelCreated;
};
