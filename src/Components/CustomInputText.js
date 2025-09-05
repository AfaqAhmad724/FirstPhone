import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';

const CustomInputText = props => {
  const [pass, setPass] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <Image style={styles.vectorStyle} source={props?.icon} />
      <TextInput
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholderTextColor}
        keyboardType={props?.keyboardType}
        style={styles.placeholderStyle}
        secureTextEntry={props?.isPassword ? pass : false}
      />
      {props?.isPassword && (
        <TouchableOpacity onPress={() => setPass(!pass)}>
          <Feather
            name={pass ? 'eye' : 'eye-off'}
            style={styles.passwordIcon}
            size={wp('3.9%')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputText;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBCBCB',
    borderRadius: wp(1.8),
    marginHorizontal: wp(5.7),
    marginTop: hp(1.8),
  },
  vectorStyle: {
    marginLeft: wp(2.6),
    resizeMode: 'contain',
    // color: '#4AB95A',
    color: Colors.primary,
    width: wp(5),
    height: wp(5),
  },
  placeholderStyle: {
    fontFamily: Fonts.medium,
    fontSize: wp(3.6),
    color: 'black',
    flex: 1,
    marginLeft: wp(0.8),
    marginTop: 4,
  },
  passwordIcon: {
    color: Colors.eyecolor,
    marginRight: wp(2),
  },
});
