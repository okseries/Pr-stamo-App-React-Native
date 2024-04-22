import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { globalStyle } from '../Theme/Theme';

// Datos de ejemplo para simular una lista de pagos
const pagosData = [
  { id: '1', fecha: '2024-04-20', monto: 100 },
  { id: '2', fecha: '2024-04-21', monto: 150 },
  { id: '3', fecha: '2024-04-22', monto: 200 },
  // Agregar más datos según sea necesario
];

export const PagosScreen = () => {
  return (
    <View style={globalStyle.container}>
      <Text style={styles.title}>Lista de Pagos</Text>
      {/* FlatList para mostrar la lista de pagos */}
      <FlatList
        data={pagosData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>ID: {item.id}</Text>
            <Text>Fecha: {item.fecha}</Text>
            <Text>Monto: {item.monto}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

