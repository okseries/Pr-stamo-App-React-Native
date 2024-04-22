import React from 'react';
import { Pressable } from 'react-native';
import { globalStyle } from '../Theme/Theme';
import { Text } from 'react-native-paper';

interface PrimaryButtonProps {
    OnPress: ()=> void,
    Title: string,
}

export const PrimaryButton = ({OnPress, Title}:PrimaryButtonProps) => {
  return (
    <Pressable
      style={globalStyle.primaryButton}
      onPress={OnPress}>
      <Text style={globalStyle.buttonText}>{Title}</Text>
    </Pressable>
  );
};
