import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../Navigation/StackNavigatorCliente';
import {globalStyle} from '../../Theme/Theme';
import {getInitials} from '../../Utility/getInitial';
import getRandomColor from '../../Components/Random Color/getRandomColor';
import Avatar from '../../Components/Avatars/AvatarPrimary';
import Icon from 'react-native-vector-icons/Ionicons';

// Define el tipo de los parámetros de la ruta
type ClienteDetailScreenRouteProp = RouteProp<
  RootStackParams,
  'ClienteDetailScreen'
>;

export const ClienteDetailScreen = () => {
  const route = useRoute<ClienteDetailScreenRouteProp>(); // Especifica el tipo de la ruta
  const {params} = route;

  // Accede a los parámetros de la ruta
  const cliente = params?.cliente;

  return (
    <View style={globalStyle.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Avatar
              initials={getInitials(cliente.primerNombre)}
              color={getRandomColor()}
            />
            <View style={{marginTop: 15}}>
              <Text style={styles.primaryText}>
                {cliente.primerNombre} {cliente.segundoNombre}{' '}
                {cliente.apellidoPaterno} {cliente.apellidoMaterno}
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 16}}>{cliente.identificacion}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.iconContainer}>
            <View style={{marginRight: 10}}>
              <Icon name="mail" size={38} color={'#82E0AA'} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Correo</Text>
              <Text style={styles.data}>{cliente.correo}</Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <View style={{marginRight: 10}}>
              <Icon name="call" size={38} color={'#82E0AA'} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Telefono</Text>
              <Text style={styles.data}>{cliente.telefono}</Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <View style={{marginRight: 10}}>
              <Icon name="pin" size={38} color={'#82E0AA'} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Direccion</Text>
              <Text style={styles.data}>{cliente.direccion}</Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <View style={{marginRight: 10}}>
              <Icon name="home" size={38} color={'#82E0AA'} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Donde labora</Text>
              <Text style={styles.data}>{cliente.dondeLabora}</Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <View style={{marginRight: 10}}>
              <Icon name="logo-usd" size={38} color={'#82E0AA'} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Ingresos</Text>
              <Text style={styles.data}>{cliente.ingresos}</Text>
            </View>
          </View>

        </View>
      </View>
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
    width: '90%',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 1,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  data: {
    fontSize: 16,
    marginBottom: 5,
    
  },
  avatarContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primaryText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
