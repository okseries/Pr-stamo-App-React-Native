import {createStackNavigator} from '@react-navigation/stack';
import {ClienteForm} from '../Screens/Client/ClienteForm';
import {ClienteScreen} from '../Screens/Client/ClienteScreen';
import {ButtonDrawer} from '../Components/ButtonDrawer';
import { ClienteDetailScreen } from '../Screens/Client/ClienteDetailScreen';
import { Cliente } from '../../Data_Prueba/Clientes';

export type RootStackParams = {
  Clientes: undefined;
  NuevoCliente: undefined;
  ClienteDetailScreen: { cliente: Cliente };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorCliente = () => {
  return (
    <>
      {/*<ButtonDrawer />*/}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Clientes" component={ClienteScreen} />
        <Stack.Screen name="NuevoCliente" component={ClienteForm} />
        <Stack.Screen name="ClienteDetailScreen" component={ClienteDetailScreen} />
      </Stack.Navigator>
    </>
  );
};
