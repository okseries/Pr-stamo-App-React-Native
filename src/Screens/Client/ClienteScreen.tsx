import React, {useState} from 'react';
import {View, TextInput, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import {useNavigation, type NavigationProp} from '@react-navigation/native';
import {globalStyle} from '../../Theme/Theme';
import {type RootStackParams} from '../../Navigation/StackNavigatorCliente';
import {Cliente, Clientes} from '../../../Data_Prueba/Clientes';
import FlatListCliente from '../../Components/FlatList/FlatListCliente';
import { StackNavigationProp } from '@react-navigation/stack';



export const ClienteScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>(Clientes);
  const [filterValue, setFilterValue] = useState<string>('');

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    const filtered = Clientes.filter(
      cliente =>
        cliente.primerNombre.toLowerCase().includes(value.toLowerCase()) ||
        cliente.identificacion.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredClientes(filtered);
  };

 
  return (
    <View style={globalStyle.container}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Buscar cliente..."
        value={filterValue}
        onChangeText={handleFilterChange}
      />

      <FlatListCliente
        data={filteredClientes}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('ClienteDetailScreen', { cliente: item })}
            style={({pressed}) => [
              styles.pressable,
              pressed && styles.pressablePressed,
            ]}>
            <View style={styles.card}>
              <Text style={styles.clientTitle}>
                {item.primerNombre} {item.segundoNombre} {item.apellidoPaterno}{' '}
                {item.apellidoMaterno}
              </Text>
              <Text>{item.identificacion}</Text>
              <Text>{item.telefono}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3.84,
  },
  clientTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  inputSearch: {
    backgroundColor: '#f5f5f5',
    color: '#000', // Color de texto
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  pressable: {
    opacity: 2, // Sin opacidad cuando no está presionado
  },
  pressablePressed: {
    opacity: 0.3, // Fondo ligeramente más oscuro cuando se presiona
  },
});






