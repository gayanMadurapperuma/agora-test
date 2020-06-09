import React from 'react';
import {View, SectionList, FlatList} from 'react-native';
import {List, Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactItem from './ContactItem';
import globalStyles from '../../../config/globalStyle';
import AppStyles from '../../../config/styles';
import styles from './styles';

const Contact = ({firends, call}) => {
  console.log(firends, 'friends');
  return (
    <>
      {firends.length > 0 && (
        <>
          <View style={styles.hView}>
            <Text style={styles.header}>{'Contact'}</Text>
          </View>
          <FlatList
            data={firends}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <ContactItem item={item} call={call} />}
          />
        </>
      )}
    </>
  );
};

export default Contact;
