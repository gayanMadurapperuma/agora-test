import React from 'react';
import {View} from 'react-native';
import {TouchableRipple, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../../../component/avatar';
import styles from './styles';
import AppStyles from '../../../config/styles';

const CallItem = ({
  item: {
    id,
    token: {fcmToken},
  },
  call,
}) => {
  return (
    <TouchableRipple
      onPress={() => console.log('pressed')}
      rippleColor="rgba(0, 0, 0, .32)">
      <View style={styles.item}>
        <Avatar />
        <View style={styles.nameView}>
          <Text style={styles.head}>{id}</Text>
          <Text style={styles.sub}>@{String(id).toLowerCase()}</Text>
        </View>
        <TouchableRipple
          onPress={() => console.log('pressed')}
          style={styles.icon}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon size={24} color={AppStyles.colors.accentColor} name="call" />
        </TouchableRipple>
        <TouchableRipple
          onPress={() => call({fcmToken, id})}
          style={styles.icon}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon
            size={24}
            color={AppStyles.colors.accentColor}
            name="videocam"
          />
        </TouchableRipple>
      </View>
    </TouchableRipple>
  );
};

export default CallItem;
