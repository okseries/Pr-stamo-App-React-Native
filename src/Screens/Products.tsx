import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { globalStyle } from '../Theme/Theme'
import { PrimaryButton } from '../Components/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../Navigation/StackNavigatorCliente';

export const Products = () => {
    const navigator = useNavigation<NavigationProp<RootStackParams>>();

    const products = [
        {id:1, name:'Sopa'},
        {id:2, name:'Pepino'},
        {id:3, name:'Maiz'},
        {id:4, name:'Harina'},
        {id:5, name:'Jugo'},
        {id:6, name:'Mago'},
        {id:7, name:'Platano'},
    ];
    
  return (
    <View style={globalStyle.container}>
        <Text style={{marginBottom: 30, fontSize: 30}}>Productos</Text>
        <FlatList 
        data={products}
        renderItem={({item})=>(
            <PrimaryButton
            OnPress={()=> navigator.navigate('Prestamos', {id: item.id, name: item.name})}
            Title={item.name}
            />
        )}
        />
        <Text style={{marginBottom: 30, fontSize: 30}}>Productos</Text>
        <PrimaryButton Title='volver atras' OnPress={()=> navigator.goBack() }/>
    </View>
  )
}
