import React, {useState} from 'react';
import {Alert, Button, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {TextinputComponent} from '../../Components/TextinputComponent';
import {UseForm} from '../../Hooks/UseForm';
import axios from 'axios';
import {Modal, Portal} from 'react-native-paper';
import SimpleCard from '../../Components/SimpleCard';
import ButtonComp from '../../Components/ButtonComp';

const URL = 'http://192.168.100.55:8080/api/v1/clientes/sucursal/1';

export const FormClientesModal = () => {
  const {formState, onInputChange, onResetForm} = UseForm();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const ModelCliente = {
    identificacion: formState['Identificacion'],
    primerNombre: formState['Primer Nombre'],
    segundoNombre: formState['Segundo Nombre'],
    apellidoPaterno: formState['Apellido Paterno'],
    apellidoMaterno: formState['Apellido Materno'],
    telefono: formState['Telefono'],
    correo: formState['Correo'],
    direccion: formState['Direccion'],
    ingresos: formState['Ingresos'],
    dondeLabora: formState['Donde Labora'],
  };

  const handleSubmit = async () => {
    try {
      const {status} = await axios.post(URL, ModelCliente);

      if (status === 200) {
        hideModal();
        onResetForm();
      }
      console.log('click ');
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}>
        <SimpleCard title="Crear Cliente" onClose={hideModal}>
          <View style={styles.contentContainer}>
            <TextinputComponent
              value={formState['Identificacion']}
              onChangeText={onInputChange}
              label="Identificacion"
              keyboardType="numeric"
            />
            <View style={styles.row}>
              <TextinputComponent
                value={formState['Primer Nombre']}
                onChangeText={onInputChange}
                label="Primer Nombre"
                keyboardType="default"
              />
              <TextinputComponent
                value={formState['Segundo Nombre']}
                onChangeText={onInputChange}
                label="Segundo Nombre"
              />
            </View>
            <View style={styles.row}>
              <TextinputComponent
                value={formState['Apellido Paterno']}
                onChangeText={onInputChange}
                label="Apellido Paterno"
              />
              <TextinputComponent
                value={formState['Apellido Materno']}
                onChangeText={onInputChange}
                label="Apellido Materno"
              />
            </View>
            <View style={styles.row}>
              <TextinputComponent
                value={formState['Telefono']}
                onChangeText={onInputChange}
                label="Telefono"
                keyboardType="phone-pad"
              />
              <TextinputComponent
                value={formState['Correo']}
                onChangeText={onInputChange}
                label="Correo"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.row}>
              <TextinputComponent
                value={formState['Ingresos']}
                onChangeText={onInputChange}
                label="Ingresos"
                keyboardType="numeric"
              />
              <TextinputComponent
                value={formState['Donde Labora']}
                onChangeText={onInputChange}
                label="Donde Labora"
              />
            </View>

            <TextinputComponent
              value={formState['Direccion']}
              onChangeText={onInputChange}
              label="Direccion"
            />
            <ButtonComp title='Crear' onPress={handleSubmit}/>
          </View>
        </SimpleCard>
      </Modal>
      <Button title="Abrir Modal" onPress={showModal} />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },

  cardRoot: {},
  header: {},
  cardTitle: {},
  contentContainer: {}, 

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
