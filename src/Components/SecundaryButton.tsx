import React from 'react';
import { Pressable } from 'react-native';
import { globalStyle } from '../Theme/Theme';
import { Text } from 'react-native-paper';

interface SecundaryButtonProps {
    OnPress?: ()=> void,
    Title: string,
}

export const SecundaryButton = ({OnPress, Title}:SecundaryButtonProps) => {
  return (
    <Pressable
      style={globalStyle.SecundaryButton}
      onPress={OnPress}>
      <Text style={globalStyle.buttonTextSecundary}>{Title}</Text>
    </Pressable>
  );
};
