module.exports = {
  root: true,
  extends: '@react-native',

  rules: {
    'prettier/prettier': 'off', // Desactivar la regla eslint-plugin-prettier/prettier
    'arrow-body-style': 'off', // Desactivar la regla arrow-body-style
    'no-console': 'warn', // Advertir sobre el uso de console.log
    'no-unused-vars': 'error', // Marcar como error las variables no utilizadas
    'react/prop-types': 'off', // Desactivar la verificación de tipos de propiedades en componentes funcionales
  },

  settings: {
    'import/alias': [
      'error',
      {
        'ignore': [
          '^@react-native-community/view$',
        ]
      }
    ]
  }
};
