import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import { UseForm } from '../Hooks/UseForm';
import axios from 'axios';
import SimpleCard from '../Components/SimpleCard';
import { TextinputComponent } from '../Components/TextinputComponent';
import ButtonComp from '../Components/ButtonComp';
import { globalStyle } from '../Theme/Theme';
import { URL } from '../../ApiURL';



export const UsuarioFormScreen = () => {
  const {formState, onInputChange, onResetForm} = UseForm();

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
        onResetForm();
      }
      console.log('click ');
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View style={globalStyle.container}>
        <SimpleCard>
          <View>
            <TextinputComponent
              value={formState['Identificacion']}
              onChangeText={onInputChange}
              label="Identificacion"
              keyboardType="numeric"
            />
            <View >
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
            <View >
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
            <View >
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
            <View >
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
      </View>
      
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
