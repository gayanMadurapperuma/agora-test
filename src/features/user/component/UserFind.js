import React from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import globalStyles from '../../../config/globalStyle';

const UserFind = ({addUserId, userId, setUserId}) => {
  return (
    <View style={globalStyles.loginContainer}>
      <View style={[globalStyles.loginForm, globalStyles.noFlex]}>
        <View style={globalStyles.textInputWrapper}>
          <TextInput
            dense={true}
            placeholder="Enter your UserId"
            value={userId}
            // error={!isValidEmail}
            label="UserId"
            mode={'outlined'}
            underlineColor="transparent"
            // theme={DarkTheme}
            onChangeText={(e) => setUserId(e)}
          />
        </View>
        <Button
          mode="contained"
          color={'#8c499c'}
          onPress={() => addUserId()}
          disabled={userId.length <= 0}
          style={[globalStyles.marginTopLevelOne, globalStyles.secondaryButton]}
          contentStyle={[
            globalStyles.secondaryButtonInner,
            globalStyles.noFlex,
          ]}>
          Find or Register
        </Button>
      </View>
    </View>
  );
};

export default UserFind;
