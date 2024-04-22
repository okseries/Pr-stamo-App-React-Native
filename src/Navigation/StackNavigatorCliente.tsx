import {createStackNavigator} from '@react-navigation/stack';
import {ClienteForm} from '../Screens/Client/ClienteForm';
import {ClienteScreen} from '../Screens/Client/ClienteScreen';
import {ButtonDrawer} from '../Components/ButtonDrawer';

export type RootStackParams = {
  Clientes: undefined;
  NuevoCliente: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorCliente = () => {
  return (
    <>
      <ButtonDrawer />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Clientes" component={ClienteScreen} />
        <Stack.Screen name="NuevoCliente" component={ClienteForm} />
      </Stack.Navigator>
    </>
  );
};
