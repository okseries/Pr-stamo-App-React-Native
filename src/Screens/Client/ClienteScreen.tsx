import React, { useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { globalStyle } from '../../Theme/Theme';
import { PrimaryButton } from '../../Components/PrimaryButton';
import { RootStackParams } from '../../Navigation/StackNavigatorCliente';

interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
}

export const ClienteScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const [clientes, setClientes] = useState<Cliente[]>([]); 
  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>([]);
  const [filterValue, setFilterValue] = useState<string>(''); 

  useEffect(() => {
    // Simular la carga inicial de la lista de clientes
    const mockClientes: Cliente[] = [
      { id: 1, nombre: 'Cliente 1', telefono: '123456789' },
      { id: 2, nombre: 'Cliente 2', telefono: '987654321' },
      { id: 3, nombre: 'Cliente 3', telefono: '555555555' },
    ];
    setClientes(mockClientes);
    setFilteredClientes(mockClientes);
  }, []);

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    const filtered = clientes.filter((cliente) =>
      cliente.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredClientes(filtered);
  };

  const handleAddCliente = () => {
    navigation.navigate('NuevoCliente'); 
  };

  return (
    <View style={globalStyle.container}>
      
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginTop: 8 }}
        placeholder="Buscar cliente..."
        value={filterValue}
        onChangeText={handleFilterChange}
      />
      {filteredClientes.map((cliente) => (
        <View key={cliente.id} style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}>
          <Text>ID {cliente.id}</Text>
          <Text>Nombre {cliente.nombre}</Text>
          <Text>Telefono {cliente.telefono}</Text>
          
        </View>
      ))}
      <PrimaryButton Title="Nuevo Cliente" OnPress={handleAddCliente} /> 
    </View>
  );
};

