import {useState, useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

export const useFcmToken = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const generateToken = async () => {
      try {
        const fcmToken = await messaging().getToken();
        setToken(fcmToken);
        return messaging().onTokenRefresh((refreshToken) => {
          setToken(refreshToken);
        });
      } catch (error) {
        setToken(null);
        console.warn(error);
      }
    };
    generateToken();
  }, []);
  console.log(token);
  return token;
};
