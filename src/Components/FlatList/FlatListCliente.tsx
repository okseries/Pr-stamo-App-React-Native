import React from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Cliente } from '../../../Data_Prueba/Clientes';
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
  },
  avatarContainer: {
    marginRight: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  
});

export default FlatListCliente;
