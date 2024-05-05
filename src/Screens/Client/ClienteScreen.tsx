import React, { useState} from 'react';
import {View,Text} from 'react-native';
import {useNavigation, type NavigationProp} from '@react-navigation/native';
import {globalStyle} from '../../Theme/Theme';
import {type RootStackParams} from '../../Navigation/StackNavigatorCliente';
import {Cliente, ClientesData} from '../../../Data_Prueba/ClientesData';
import { FlatList } from 'react-native';
import { Card } from 'react-native-paper';



export const ClienteScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>(ClientesData);
  const [filterValue, setFilterValue] = useState<string>('');


  /*useEffect(() => {

    const ListarClientes = async (): Promise<void>=>{
      try {
        const {data} = await axios.get(ListarClientesURL);
        setFilteredClientes(data || ClientesData);
      } catch (error) {
        console.error(error);
      }
    }
    ListarClientes(); 
  }, [])*/
  

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    const filtered = ClientesData.filter(
      cliente =>
        cliente.primerNombre.toLowerCase().includes(value.toLowerCase()) ||
        cliente.identificacion.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredClientes(filtered);
  };


  const renderItem = ({item}: any) => (
    <Card style={globalStyle.card}>
      <View style={{...globalStyle.cardHeader, ...globalStyle.rowCenter}}>
        <Text style={globalStyle.textoPrimario}>{item.primerNombre}</Text>
      </View>
     
    </Card>
  );

 
  return (
    <View style={globalStyle.container}>
      <FlatList
        data={ClientesData}
        renderItem={renderItem}
        keyExtractor={item => item.idCliente.toString()}
      />
    </View>
  );
};








