import {createStackNavigator} from '@react-navigation/stack';
import {PagosScreen} from '../Pago/PagosScreen';
import {PagoFormScreen} from '../Pago/PagoFormScreen';
import {ButtonDrawer} from '../Components/ButtonDrawer';

export type RootStackParams = {
  Pagos: undefined;
  NuevoPago: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorPago = () => {
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
        <Stack.Screen name="Pagos" component={PagosScreen} />
        <Stack.Screen name="NuevoPago" component={PagoFormScreen} />
      </Stack.Navigator>
    </>
  );
};
