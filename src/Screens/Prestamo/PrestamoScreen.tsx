import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalCOlors, globalStyle} from '../../Theme/Theme';
import {FlatList} from 'react-native-gesture-handler';
import {Prestamo, PrestamoData} from '../../../Data_Prueba/PrestamoData';
import {Card} from 'react-native-paper';
import {PrimaryButton} from '../../Components/PrimaryButton';
import {SecundaryButton} from '../../Components/SecundaryButton';
import {ListaPrestamoURL} from '../../../ApiURL';
import axios from 'axios';
import BottomSheetComponent from '../../Components/BottomSheetComponent';

export const PrestamoScreen = () => {
  const [prestamos, setPrestamos] = useState<any>(PrestamoData);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [prestamoRow, setPrestamoRow] = useState<Prestamo | null>(null);

  const toggleBottomSheet = (item: Prestamo) => {
    setPrestamoRow(item);
    setIsBottomSheetOpen(!isBottomSheetOpen)
  };

  /*useEffect(() => {

    const ListarClientes = async (): Promise<void>=>{
      try {
        const {data} = await axios.get(ListaPrestamoURL);
        setPrestamos(data || PrestamoData);
        
      } catch (error) {
        console.error(error);
      }
    }
    ListarClientes(); 
  }, [])*/

  const renderItem = ({item}: {item: Prestamo}) => (
    <Card style={globalStyle.card}>
      <View style={globalStyle.cardBody}>
        <Text style={globalStyle.textoSecundario}>
          {item.cliente.primerNombre} {item.cliente.apellidoPaterno}
        </Text>
        <Text style={globalStyle.textoSecundario}>
          {item.cliente.identificacion}
        </Text>
        <Text style={globalStyle.textoPrimario}>${item.monto}</Text>

        <Text style={{...globalStyle.textoSecundario, color: globalCOlors.primary}}>
          {item.estado ? 'Activo' : 'Finalizado'}
        </Text>
      </View>
      <View style={globalStyle.cardFooter}>
        <SecundaryButton
          OnPress={() => toggleBottomSheet(item)}
          Title="Ver Cuotas"
        />

        <SecundaryButton
          OnPress={() => console.log(item)}
          Title="Ver detalle"
        />
      </View>
    </Card>
  );

  return (
    <View style={globalStyle.container}>
      <FlatList
        data={prestamos}
        renderItem={renderItem}
        keyExtractor={item => item.idPrestamo.toString()}
        style={globalStyle.listContainer}
      />

      {isBottomSheetOpen && (
        <View style={isBottomSheetOpen ? globalStyle.overlay : null} />
      )}

      <BottomSheetComponent
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(!isBottomSheetOpen)}
        prestamoRow={prestamoRow!}
      />
    </View>
  );
};


