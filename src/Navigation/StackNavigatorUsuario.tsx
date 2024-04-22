import {createStackNavigator} from '@react-navigation/stack';
import {ClienteScreen} from '../Screens/Client/ClienteScreen';
import {PrestamoScreen} from '../Screens/Prestamo/PrestamoScreen';
import {Products} from '../Screens/Products';
import {UsuariosScreen} from '../Usuario/UsuariosScreen';
import {UsuarioFormScreen} from '../Usuario/UsuarioFormScreen';
import {ButtonDrawer} from '../Components/ButtonDrawer';

export type RootStackParams = {
  Usuarios: undefined;
  NuevoUsuario: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorUsuario = () => {
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
        <Stack.Screen name="Usuarios" component={UsuariosScreen} />
        <Stack.Screen name="NuevoUsuario" component={UsuarioFormScreen} />
      </Stack.Navigator>
    </>
  );
};
