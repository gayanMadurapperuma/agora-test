import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import UserFind from '../component/UserFind';
import {useFcmToken} from '../hooks';
import {saveToken} from '../../../api/communicaiton';

const UserContainer = (props) => {
  // const firends = useFriends();
  const fcmToken = useFcmToken();
  const [userId, setUserId] = useState('');
  const navigation = useNavigation();
  const addUserId = useCallback(() => {
    console.log('adding user');
    const addUser = async () => {
      try {
        const addedUser = await saveToken({userId, fcmToken});
        console.log(addedUser);
        navigation.navigate('Contact', {
          userId,
        });
      } catch (error) {
        console.warn(error);
      }
    };
    addUser();
  }, [fcmToken, userId, navigation]);

  return (
    <UserFind addUserId={addUserId} userId={userId} setUserId={setUserId} />
  );
};

export default UserContainer;
