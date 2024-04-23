import {createStackNavigator} from '@react-navigation/stack';
import {ClienteScreen} from '../Screens/Client/ClienteScreen';
import {PrestamoScreen} from '../Screens/Prestamo/PrestamoScreen';
import {Products} from '../Screens/Products';
import {MorasScreen} from '../Mora/MorasScreen';
import {ButtonDrawer} from '../Components/ButtonDrawer';

export type RootStackParams = {
  Moras: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorMora = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Moras" component={MorasScreen} />
      </Stack.Navigator>
    </>
  );
};
