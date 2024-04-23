import {createStackNavigator} from '@react-navigation/stack';
import {ClienteScreen} from '../Screens/Client/ClienteScreen';
import {PrestamoScreen} from '../Screens/Prestamo/PrestamoScreen';
import {Products} from '../Screens/Products';
import {PrestamoForm} from '../Screens/Prestamo/PrestamoForm';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {ButtonDrawer} from '../Components/ButtonDrawer';

export type RootStackParams = {
  Prestamos: undefined;
  PrestamoForm: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorPrestamo = () => {
  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Prestamos" component={PrestamoScreen} />
        <Stack.Screen name="PrestamoForm" component={PrestamoForm} />
      </Stack.Navigator>
    </>
  );
};
