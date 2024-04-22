import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {DrawerNavigatorMenu} from './DrawerNavigatorMenu';
import {StackNavigatorMora} from './StackNavigatorMora';
import {StackNavigatorCliente} from './StackNavigatorCliente';
import {StackNavigatorUsuario} from './StackNavigatorUsuario';
import { ClienteForm } from '../Screens/Client/ClienteForm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigatorPrestamo } from './StackNavigatorPrestamo';
import { StackNavigatorPago } from './StackNavigatorPago';
import { PrestamoForm } from '../Screens/Prestamo/PrestamoForm';
import { globalCOlors } from '../Theme/Theme';
import { Text } from 'react-native';
import { Dashboard } from '../Dashboard/Dashboard';
import { ButtonDrawer } from '../Components/ButtonDrawer';
import { StackNavigatorDashboard } from './StackNavigatorDashboard';

export const BottomTapNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator
  sceneContainerStyle={{
    backgroundColor: globalCOlors.background,    
  }} 
  screenOptions={{
   tabBarShowLabel: false,
   
    
    tabBarItemStyle: {
      //borderRadius: 20, // Hace que las pestañas/tab sean redondeadas
    },
    headerStyle:{
      elevation:0,
    },

  }}
>
<Tab.Screen options={{title:'Dashboard', tabBarIcon: ({color})=>(<Text style={{color}}>Dashboard</Text>)}} name="StackNavigatorDashboard" component={StackNavigatorDashboard} />
      <Tab.Screen options={{title:'Prestamo', tabBarIcon: ({color})=>(<Text style={{color}}>Prestamo</Text>)}} name="StackNavigatorPrestamo" component={StackNavigatorPrestamo} />
      <Tab.Screen options={{title:'Pago', tabBarIcon: ({color})=>(<Text style={{color}}>Pago</Text>)}} name="StackNavigatorPago" component={StackNavigatorPago} />
      <Tab.Screen options={{title:'Mora', tabBarIcon: ({color})=>(<Text style={{color}}>Mora</Text>)}} name="StackNavigatorMora" component={StackNavigatorMora} />
      <Tab.Screen options={{title:'Cliente', tabBarIcon: ({color})=>(<Text style={{color}}>Cliente</Text>)}} name="StackNavigatorCliente" component={StackNavigatorCliente} />
    </Tab.Navigator>
  );
};
