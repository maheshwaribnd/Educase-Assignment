import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { snpro } from '../../config/config';

interface ButtonProps {
  name: string;
  onpress: () => void;
}

const ButtonComp = ({ name, onpress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => onpress()}>
      <LinearGradient
        colors={['#FC500D', '#FD7532', '#FF9B58']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.5, 1]}
        style={styles.button}
      >
        <Text style={styles.btnTxt}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    width: 350,
    height: 55,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },

  btnTxt: {
    color: 'white',
    fontSize: 18,
    fontFamily: snpro,
    letterSpacing: 1,
    textAlign: 'center',
  },
});
