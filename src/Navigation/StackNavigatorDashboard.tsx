import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../Dashboard/Dashboard';
import {ButtonDrawer} from '../Components/ButtonDrawer';
import { NotificationButtom } from '../Components/NotificationButtom';

export type RootStackParams = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatorDashboard = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
          headerRight: () => <NotificationButtom />
        }}>
        <Stack.Screen name="Home" component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};
