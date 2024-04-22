import React from 'react';
import {Text, View} from 'react-native';
import { PrimaryButton } from '../Components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export const UsuariosScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>UsuariosScreen</Text>
      <PrimaryButton Title='Nuevo Usuario' OnPress={()=>navigation.navigate('NuevoUsuario' as never)}/>
    </View>
    
  );
};
