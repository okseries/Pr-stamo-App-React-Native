import React, { PropsWithChildren, useEffect } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalCOlors } from '../Theme/Theme';



export const NotificationButtom = () => {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({
        headerRight: () =>(
           <Pressable  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
               <Icon color={globalCOlors.primary} size={24} name='notifications' />
           </Pressable>
       )
      })
    }, [])

    return <></>
  };


  
  