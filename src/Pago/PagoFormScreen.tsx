import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { PrimaryButton } from '../Components/PrimaryButton';
import { globalStyle } from '../Theme/Theme';

export const PagoFormScreen: React.FC = () => {
  const [montoPagado, setMontoPagado] = useState<string>('');

  // Datos de ejemplo para simular una cuota
  const selectedRows = [
    {
      idCuota: '1',
      numeroCuota: 1,
      fechaCuota: '2024-04-21',
      montoCuota: 100,
      montoPagado: 50,
      mora: [
        {
          idMora: '1',
          diasDeRetraso: 5,
          montoMora: 10,
          pagada: false,
        },
      ],
    },
  ];

  // Función para calcular el total a pagar
  const calculateTotalAmount = () => {
    let totalAmount = 0;

    selectedRows.forEach((cuota) => {
      totalAmount += cuota.montoCuota - cuota.montoPagado;
      if (cuota.mora.length > 0 && !cuota.mora[0].pagada) {
        totalAmount += cuota.mora[0].montoMora;
      }
    });

    return totalAmount;
  };

  // Manejar el envío del formulario
  const handleSubmit = () => {
    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Monto pagado:', montoPagado);
  };

  return (
    <View style={globalStyle.container}>
      {/* Mostrar las cuotas seleccionadas */}
      {selectedRows.map((cuota) => (
        <View key={cuota.idCuota} style={{ marginBottom: 10 }}>
          <Text>Cuota #{cuota.numeroCuota}</Text>
          <Text>Fecha de Vencimiento: {cuota.fechaCuota}</Text>
          <Text>Monto a pagar: {cuota.montoCuota - cuota.montoPagado}</Text>
          {/* Mostrar detalles de mora si existen */}
          {cuota.mora.length > 0 && (
            <View style={{ marginLeft: 10 }}>
              <Text>Días de retraso: {cuota.mora[0].diasDeRetraso}</Text>
              <Text>Monto de mora: {cuota.mora[0].montoMora}</Text>
            </View>
          )}
        </View>
      ))}
      {/* Mostrar total a pagar */}
      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Total a Pagar: {calculateTotalAmount()}</Text>
      {/* Input para el monto pagado */}
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 10 }}
        value={montoPagado}
        onChangeText={setMontoPagado}
        placeholder="Ingrese el monto pagado"
        keyboardType="numeric"
      />
      {/* Botón para enviar el formulario */}
      <PrimaryButton OnPress={handleSubmit} Title='Pagar'/>
    </View>
  );
};

