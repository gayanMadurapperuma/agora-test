import {useEffect} from 'react';
import notifee, {EventType} from '@notifee/react-native';

export const useActions = () => {
  useEffect(() => {
    notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.ACTION_PRESS && detail.pressAction.id) {
        console.log(
          'User pressed an action with the id: ',
          detail.pressAction.id,
        );
      }
    });
  }, []);
  return true;
};
