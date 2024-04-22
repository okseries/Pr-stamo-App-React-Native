import React from 'react'
import { Text, View } from 'react-native'
import { globalStyle } from '../../Theme/Theme'
import { PrimaryButton } from '../../Components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

export const PrestamoScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={globalStyle.container}>
        <Text>PrestamoScreen</Text>
        <PrimaryButton Title='Productos' OnPress={()=> navigation.navigate('Productos' as never)}/>
    </View>
  )
}
