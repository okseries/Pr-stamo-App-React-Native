import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { FormState } from '../Hooks/UseForm';

type KeyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad';

interface CustomInputProps {
  label: string;
  value: any; // Add formState prop
  onChangeText: any; // Add onInputChange prop
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
}

export const TextinputComponent: React.FC<CustomInputProps> = ({
  label,
  value, // Cambia esto para aceptar el valor específico asociado a cada etiqueta
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value} // Cambia esto para aceptar el valor específico asociado a cada etiqueta
      onChangeText={(text) => onChangeText(label, text)} // Actualiza para pasar la etiqueta y el texto
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={styles.input}

    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    minWidth: 210, 
    paddingHorizontal: 10, 
  }
});
