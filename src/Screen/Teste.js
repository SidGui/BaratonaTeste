import React from 'react';
import {View, Text, Pressable} from 'react-native';
const Teste = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Teste Screen</Text>
    <Pressable
      style={{
        backgroundColor: '#FFA',
        width: 100,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        navigation.navigate('Teste2');
      }}>
      <Text>Ir para Teste 2</Text>
    </Pressable>
  </View>
);

export default Teste;
