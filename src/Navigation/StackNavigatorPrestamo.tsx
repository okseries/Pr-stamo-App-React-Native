import {createStackNavigator} from '@react-navigation/stack';
import {PrestamoScreen} from '../Screens/Prestamo/PrestamoScreen';
import {PrestamoForm} from '../Screens/Prestamo/PrestamoForm';
import {useNavigation} from '@react-navigation/native';

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
