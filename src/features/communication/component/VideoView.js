import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {AgoraView} from 'react-native-agora';
import styles from './style';

const {width} = Dimensions.get('window');

const VideoView = ({
  agoraConfig: {peerIds, joinSucceed},
  startCall,
  endCall,
  isEnabled,
}) => {
  return (
    <View style={styles.max}>
      {
        <View style={styles.max}>
          <View style={styles.buttonHolder}>
            <TouchableOpacity
              title="Start Call"
              onPress={startCall}
              style={styles.button}>
              <Text style={styles.buttonText}> Start Call </Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="End Call"
              onPress={endCall}
              style={styles.button}>
              <Text style={styles.buttonText}> End Call </Text>
            </TouchableOpacity>
          </View>
          {!joinSucceed ? (
            <View />
          ) : (
            <View style={styles.fullView}>
              {peerIds.length > 3 ? ( //view for four videostreams
                <View style={styles.full}>
                  <View style={styles.halfViewRow}>
                    <AgoraView
                      style={styles.half}
                      remoteUid={peerIds[0]}
                      mode={1}
                    />
                    <AgoraView
                      style={styles.half}
                      remoteUid={peerIds[1]}
                      mode={1}
                    />
                  </View>
                  <View style={styles.halfViewRow}>
                    <AgoraView
                      style={styles.half}
                      remoteUid={peerIds[2]}
                      mode={1}
                    />
                    <AgoraView
                      style={styles.half}
                      remoteUid={peerIds[3]}
                      mode={1}
                    />
                  </View>
                </View>
              ) : peerIds.length > 2 ? ( //view for three videostreams
                <View style={styles.full}>
                  <View style={styles.half}>
                    <AgoraView
                      style={styles.full}
                      remoteUid={peerIds[0]}
                      mode={1}
                    />
                  </View>
                  <View style={styles.halfViewRow}>
                    <AgoraView
                      style={styles.half}
                      remoteUid={peerIds[1]}
                      mode={1}
                    />
                    <AgoraView
                      style={styles.half}
                      remoteUid={peerIds[2]}
                      mode={1}
                    />
                  </View>
                </View>
              ) : peerIds.length > 1 ? ( //view for two videostreams
                <View style={styles.full}>
                  <AgoraView
                    style={styles.full}
                    remoteUid={peerIds[0]}
                    mode={1}
                    showLocalVideo
                  />
                  <AgoraView
                    style={styles.full}
                    remoteUid={peerIds[1]}
                    mode={1}
                  />
                </View>
              ) : peerIds.length > 0 ? ( //view for videostream
                <AgoraView
                  style={styles.full}
                  remoteUid={peerIds[0]}
                  mode={1}
                />
              ) : (
                <View>
                  <Text style={styles.noUserText}> No users connected </Text>
                </View>
              )}
              <AgoraView
                style={styles.localVideoStyle}
                zOrderMediaOverlay={true}
                showLocalVideo={true}
                mode={1}
              />
            </View>
          )}
        </View>
      }
    </View>
  );
};

const AppStyle = StyleSheet.create({
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

export default VideoView;
