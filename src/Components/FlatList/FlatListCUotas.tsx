import React, {useState} from 'react';
import { Text, View} from 'react-native';
import {globalCOlors, globalStyle} from '../../Theme/Theme';
import {FlatList} from 'react-native-gesture-handler';
import {Prestamo} from '../../../Data_Prueba/PrestamoData';
import {Card} from 'react-native-paper';

interface BottomSheetProps {
  prestamoRow: Prestamo;
}

export const FlatListCuotas = ({prestamoRow}: BottomSheetProps) => {
  if (!prestamoRow || !prestamoRow.cuotas) {
    return null;
  } else {
    console.log('prestamoRow.idPrestamo: ', prestamoRow.idPrestamo);
  }

  // Obtén la lista de cuotas del objeto prestamoRow
  const cuotas: any[] = prestamoRow.cuotas;

  const renderItem = ({item}: any) => (
    <Card style={globalStyle.card}>
      <View style={globalStyle.cardBody}>
        <Text style={globalStyle.textoSecundario}>#: {item.numeroCuota}</Text>
        <Text style={globalStyle.textoSecundario}>${item.montoCuota}</Text>
        <Text style={globalStyle.textoSecundario}>
          Pagado: ${item.montoPagado}
        </Text>
        <Text
          style={[
            globalStyle.textoSecundario,
            {
              color:
                item.estado === 'Pago Parcial'
                  ? globalCOlors.warning
                  : item.estado === 'Pendiente'
                  ? globalCOlors.danger
                  : globalCOlors.primary,
            },
          ]}>
          {item.estado}
        </Text>
      </View>
    </Card>
  );

  return (
    <View style={globalStyle.container}>
      <FlatList
        data={cuotas} // Usa la lista de cuotas como data
        renderItem={renderItem}
        keyExtractor={item => item.idCuota.toString()}
        style={globalStyle.listContainer}
      />
    </View>
  );
};
