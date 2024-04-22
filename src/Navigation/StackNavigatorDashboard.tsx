import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../Dashboard/Dashboard';
import {ButtonDrawer} from '../Components/ButtonDrawer';

export type RootStackParams = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorDashboard = () => {
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
        <Stack.Screen name="Home" component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};
