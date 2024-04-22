import {StyleSheet} from 'react-native';

export const globalCOlors = {
  primary: '#7037eb',
  secundary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',

  background: '#fff',
};

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalCOlors.background,
  },

  primaryButton: {
    backgroundColor: globalCOlors.primary,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: globalCOlors.background,
    fontSize: 18,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
