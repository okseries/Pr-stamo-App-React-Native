import {StyleSheet} from 'react-native';

export const globalCOlors = {
  primary: '#0082CD',
  secundary: '#E3F5FF',
  success: '#4cc9f0',
  warning: '#FE5A13',
  danger: '#e71d36',
  dark: '#22223b',
  pnik: '#E1156E',
  gray: '#F3F3F3',
  background: '#fff',
  textPrimary: '#000',
  textSecundary: '#757575',
};

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 15,
    //paddingHorizontal: 24,
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

  SecundaryButton: {
    backgroundColor: globalCOlors.secundary,
    borderRadius: 50,
    padding: 10,
    width: '45%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonTextSecundary: {
    color: globalCOlors.dark,
    fontSize: 18,
  },

  buttonText: {
    color: globalCOlors.background,
    fontSize: 18,
  },

  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  card: {
    marginVertical:10,
    marginHorizontal: 24,
    backgroundColor: globalCOlors.background,
    borderRadius: 20,
    shadowColor: '#000',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardHeader: {},
  cardBody: {
    padding: 10,
  },

  cardFooter: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',  
    flexDirection: 'row',
  },
  
  textoPrimario: {
    color: globalCOlors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:10,

  },
  textoSecundario: {
    //color: globalCOlors.textSecundary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:10,
  },

  bottomSheetContainer: {
    backgroundColor: globalCOlors.pnik, // Usa el color de fondo global o el color deseado
    flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
    //paddingHorizontal: 16,
    //paddingVertical: 16,
  },

  bottomSheetText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalCOlors.textPrimary, // Usa el color de texto global o el color deseado
    textAlign: 'center',
    marginTop: 20,
  },

  listContainer: {
    flex: 1,
    backgroundColor: 'red',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
