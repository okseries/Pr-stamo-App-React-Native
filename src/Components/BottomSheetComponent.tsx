import React, {useCallback, useRef, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {globalStyle} from '../Theme/Theme';
import {FlatListCuotas} from './FlatList/FlatListCUotas';
import {Prestamo, PrestamoData} from '../../Data_Prueba/PrestamoData';


interface BottomSheetProps {
  onClose: () => void;
  isOpen: boolean;
  prestamoRow: Prestamo;
}

const BottomSheetComponent = ({isOpen, onClose, prestamoRow}: BottomSheetProps) => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['80%'];

  return (
    <>
      {isOpen && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={onClose}
          backgroundStyle={globalStyle.bottomSheetContainer}>
          <BottomSheetView style={{ flex: 1 }}>
          <FlatListCuotas prestamoRow={prestamoRow}/>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default BottomSheetComponent;





