import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import { Cliente } from '../../../Data_Prueba/ClientesData';
import Avatar from '../Avatars/AvatarPrimary';
import getRandomColor from '../Random Color/getRandomColor';
import { getInitials } from '../../Utility/getInitial';


interface FlatListClienteProps {
  title?: string;
  data: Cliente[];
  renderItem: ({ item }: { item: Cliente }) => JSX.Element;
}

const FlatListCliente: React.FC<FlatListClienteProps> = ({
  title,
  data,
  renderItem,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Aquí puedes realizar cualquier acción para actualizar tus datos
    // Por ejemplo, puedes hacer una solicitud a un servidor

    setTimeout(() => {
      // Una vez que se completa la actualización, establece refreshing en false
      setRefreshing(false);
    }, 2000); // Simulación de una actualización que toma 2 segundos

    // Aquí puedes actualizar tu estado de datos con los nuevos datos
    // setData(nuevosDatos);
  };
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={data}
        renderItem={({ item }) => (
            
            <View style={styles.itemContainer}>
              <View style={styles.avatarContainer}>
                <Avatar initials={getInitials(item.primerNombre)} color={getRandomColor()} />
              </View>
              {renderItem({ item })}
            </View>
        
          
        )}
        keyExtractor={(item) => item.idCliente.toString()}
        contentContainerStyle={styles.flatListContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#9Bd35A', '#689F38']}
            // Puedes personalizar el indicador de carga con la propiedad `refreshingIndicatorTintColor`
            // refreshingIndicatorTintColor="#9Bd35A"
            // También puedes personalizar el color de fondo con la propiedad `refreshControlTintColor`
            // refreshControlTintColor="#689F38"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'red'
  },
  avatarContainer: {
    marginRight: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  
});

export default FlatListCliente;
