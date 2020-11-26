import React from 'react';
import {View, Text, Pressable} from 'react-native';
import OneSignal from 'react-native-onesignal';

const Teste2 = ({navigation}) => {
  React.useEffect(() => {
    OneSignal.setExternalUserId('XPTO');
    OneSignal.sendTag('Tag11Emulador', 'Teste10');
  }, []);

  /** TypeError: _reactNativeOnesignal.default.getDeviceState is not a function. (In '_reactNativeOnesignal.default.getDeviceState()', '_reactNativeOnesignal.default.getDeviceState' is undefined)*/

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Teste 2 Screen</Text>
      <Pressable
        style={{
          backgroundColor: '#0AA',
          width: 100,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('Teste1');
        }}>
        <Text>Ir para Teste</Text>
      </Pressable>
    </View>
  );
};

export default Teste2;
