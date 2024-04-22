
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { StackNavigatorDashboard } from './StackNavigatorDashboard';
import { globalCOlors } from '../Theme/Theme';
import { View, useWindowDimensions } from 'react-native';
import { BottomTapNavigator } from './BottomTapNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorMenu = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator

    drawerContent={(props) => <CustomDrawerContent {...props}/>}
    screenOptions={{
      drawerType: (dimensions.width >= 758) ? 'permanent': 'slide',
      headerShown: false,
      drawerActiveBackgroundColor: globalCOlors.primary,
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor:globalCOlors.primary,
      drawerItemStyle:{
        borderRadius: 100,
        paddingHorizontal: 20,
      }
    }}
     >
      <Drawer.Screen name="BottomTapNavigator" component={BottomTapNavigator} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent =(props: DrawerContentComponentProps)=>{

  return(
    <DrawerContentScrollView>
      <View
        style={{
          height:200,
          backgroundColor: globalCOlors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}
