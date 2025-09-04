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

const CustomInputText = props => {
  const [pass, setPass] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <Image style={styles.vectorstyle} source={props?.icon} />
      <TextInput
        placeholder={props?.placeholder}
        placeholderTextColor={props?.placeholderTextColor}
        keyboardType={props?.keyboardType}
        style={styles.placeholderstyle}
        secureTextEntry={props?.isPassword ? pass : false}
      />
      {props?.isPassword && (
        <TouchableOpacity onPress={() => setPass(!pass)}>
          <Feather
            name={pass ? 'eye-off' : 'eye'}
            style={styles.passwordicon}
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
  vectorstyle: {
    marginLeft: wp(2.6),
    width: wp(3.8),
    height: hp(5.3),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  placeholderstyle: {
    fontFamily: Fonts.medium,
    fontSize: wp(3.6),
    color: 'black',
    flex: 1,
    marginLeft: wp(0.8),
  },
  passwordicon: {
    color: '#B4B4B4',
    marginRight: wp(2),
  },
});
