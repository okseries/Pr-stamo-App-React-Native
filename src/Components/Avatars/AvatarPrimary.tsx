import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface AvatarProps {
  initials: string;
  color: string;
}

const Avatar: React.FC<AvatarProps> = ({ initials, color }) => (
  <View style={[styles.avatar, { backgroundColor: color }]}>
    <Text style={styles.initials}>{initials}</Text>
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Color del texto del avatar
  },
});

export default Avatar;
