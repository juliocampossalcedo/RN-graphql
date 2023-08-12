import { Dimensions, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

export const styles = StyleSheet.create({
    image: {
      width: imageWidth,
      height: imageWidth,
      marginBottom: 50
    },
    text: {
      paddingBottom: 20,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500'
    }
  });