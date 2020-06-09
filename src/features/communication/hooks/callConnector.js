import {useCallback, useState} from 'react';
import {onCall} from '../../../api/communicaiton';

export const useCall = (info) => {
  console.log(info);
  const [status, setState] = useState(0);
  return [
    status,
    useCallback(() => {
      const callFriend = async () => {
        try {
          setState(1);
          const response = await onCall(info);
        } catch (error) {
          console.log(error);
          setState(2);
        }
      };
      callFriend();
    }, [info]),
  ];
};
