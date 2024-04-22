import React from 'react';
import { SafeAreaView, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigatorCliente } from './src/Navigation/StackNavigatorCliente';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigatorMenu } from './src/Navigation/DrawerNavigatorMenu';
import { BottomTapNavigator } from './src/Navigation/BottomTapNavigator';


const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaProvider>
      <DrawerNavigatorMenu/>
    </SafeAreaProvider>
    </NavigationContainer>
  );
};
export default App;
