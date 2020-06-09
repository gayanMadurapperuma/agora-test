import React, {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Contact from '../component/Contact';
import {useFriends} from '../hooks';
import {onCall} from '../../../api/communicaiton';

const ContactContainer = ({navigation, route}) => {
  const firends = useFriends();
  const navigationHooks = useNavigation();
  // useEffect(() => {
  //   if (route.params?.userId) {
  //     console.log(route.params.userId);
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params]);
  const call = useCallback(
    ({fcmToken, id}) => {
      navigationHooks.navigate('VideoConference', {
        channelName: id,
        fcmToken,
      });
      // const callFriend = async () => {
      //   try {
      //     const response = await onCall(info);
      //     console.log(response);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // callFriend();
    },
    [navigationHooks],
  );
  // console.log(firends);
  return <Contact firends={firends || []} call={call} />;
};

export default ContactContainer;
