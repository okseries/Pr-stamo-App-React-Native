import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';


interface SimpleCardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  onClose?: () => void;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  children,
  title,
  subtitle,
  onClose,
}) => {
  return (
    <View style={styles.cardRoot}>
      <View style={styles.header}>
        <Text style={styles.cardTitle}>{title}</Text>
        
         {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="close" size={24} color="red" /> 
          </TouchableOpacity>*/}
        
      </View>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">

      <View style={styles.contentContainer}>{children}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    
  },
  cardRoot: {
    
  },
  header: {
    paddingBottom: 40,
    
  },
  cardTitle: {
    fontSize: 18,
    
  },
  cardSubtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  contentContainer: {
  },
});

export default SimpleCard;
