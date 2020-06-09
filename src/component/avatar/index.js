import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Avatar = (props) => {
  return (
    <View style={styles.avatarView}>
      <Icon name="face" size={50} color="grey" />
    </View>
  );
};

export default Avatar;
