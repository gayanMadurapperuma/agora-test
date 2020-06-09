/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {AgoraView} from 'react-native-agora';

const {width} = Dimensions.get('window');

const VideoConference = ({agoraConfig: {peerIds}}) => {
    console.log(peerIds);
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Text style={styles.title}>{'Gayan Madurapperuma'}</Text>
        <Text style={styles.subText}>CALLING</Text>
      </View>
      <TouchableOpacity
        style={[styles.btnStopCall, styles.shadow]}
        onPress={() => console.log()}>
        <Image
          style={styles.iconImg}
          source={{uri: 'https://img.icons8.com/windows/32/000000/phone.png'}}
        />
      </TouchableOpacity>
      {/* <Image
        style={[styles.image]}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      /> */}
      <AgoraView style={styles.full} remoteUid={peerIds[0]} mode={1} />
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.btnAction, styles.shadow]}
          onPress={() => console.log()}>
          <Image
            style={styles.iconImg}
            source={{
              uri:
                'https://img.icons8.com/material-rounded/48/000000/speaker.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnAction, styles.shadow]}
          onPress={() => console.log()}>
          <Image
            style={styles.iconImg}
            source={{
              uri:
                'https://img.icons8.com/material-outlined/48/000000/topic.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnAction, styles.shadow]}
          onPress={() => console.log()}>
          <Image
            style={styles.iconImg}
            source={{
              uri:
                'https://img.icons8.com/material-outlined/48/000000/block-microphone.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#075e54',
    height: 140,
    justifyContent: 'center',
    padding: 20,
  },
  full: {
    flex: 1,
  },
  image: {
    width,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e20e30',
    marginTop: 250,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#075e54',
    marginTop: 50,
    flex: 1,
  },
  title: {
    color: '#f0efef',
    fontSize: 36,
  },
  subText: {
    color: '#c8c8c8',
    fontSize: 14,
  },
  iconImg: {
    height: 32,
    width: 32,
    alignSelf: 'center',
  },
  btnStopCall: {
    height: 65,
    width: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#FF0000',
    position: 'absolute',
    bottom: 160,
    left: '40%',
    zIndex: 1,
  },
  btnAction: {
    height: 45,
    width: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default VideoConference;
