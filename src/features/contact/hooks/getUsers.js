import {useEffect, useState} from 'react';
import {getFriends} from '../../../api/communicaiton';
// import firestore from '@react-native-firebase/firestore';

export const useFriends = () => {
  const [friends, setFirends] = useState([]);
  useEffect(() => {
    const getFirends = async () => {
      try {
        const users = await getFriends();
        setFirends(users);
      } catch (error) {
        setFirends([]);
      }
    };
    getFirends();
  }, []);
  return friends;
};
