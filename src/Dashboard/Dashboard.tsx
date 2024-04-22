import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {Pressable, Text, View} from 'react-native';
import { RootStackParams } from '../Navigation/StackNavigatorCliente';
import { ButtonDrawer } from '../Components/ButtonDrawer';
import { globalStyle } from '../Theme/Theme';

export const Dashboard = () => { 
    return (

    <View style={globalStyle.container}>
      <Text>Dashboard</Text>
    </View>
  );
};
