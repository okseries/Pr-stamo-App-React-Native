import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const ButtonComp: React.FC<ButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress} underlayColor="#1E88E5">
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonComp;
