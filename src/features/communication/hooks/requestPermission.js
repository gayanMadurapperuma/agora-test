import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';

export const usePermission = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        setPermissionGranted(
          granted['PermissionsAndroid.PERMISSIONS.CAMERA'] ===
            PermissionsAndroid.PERMISSIONS.GRANTED &&
            granted['PermissionsAndroid.PERMISSIONS.RECORD_AUDIO'] ===
              PermissionsAndroid.PERMISSIONS.GRANTED,
        );
      } catch (error) {
        setPermissionGranted(false);
      }
    };
    requestPermission();
  }, []);
  return permissionGranted;
};
