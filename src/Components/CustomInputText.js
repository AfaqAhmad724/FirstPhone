import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const CustomInputText = props => {
  const [pass, setPass] = useState(true);

  return (
    <View style={{ marginTop: hp(2) }}>
      <View style={[styles.inputContainer, props?.inputContainer]}>
        {props?.icon && (
          <Image style={styles.vectorStyle} source={props?.icon} />
        )}
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={
            props?.placeholderTextColor || Colors.mediumGrey
          }
          keyboardType={props?.keyboardType}
          style={[styles.placeholderStyle, props.style]}
          secureTextEntry={props?.isPassword ? pass : false}
          value={props?.value}
          onChangeText={props?.onChangeText}
          multiline={props?.multiline || false}
        />
        {props?.isPassword && (
          <TouchableOpacity onPress={() => setPass(!pass)}>
            <Feather
              name={pass ? 'eye-off' : 'eye'}
              style={styles.passwordIcon}
              size={wp('3.9%')}
            />
          </TouchableOpacity>
        )}
      </View>

      {props?.error ? (
        <Text
          style={[styles.errorText, props?.errorStyle, props?.erroringStyles]}
        >
          {props.error}
        </Text>
      ) : null}
    </View>
  );
};

export default CustomInputText;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.verificationColor,
    borderRadius: wp(1.8),
    marginTop: hp(0.5),
  },
  vectorStyle: {
    marginLeft: wp(2.6),
    resizeMode: 'contain',
    color: Colors.primary,
    width: wp(5.3),
    height: wp(5.3),
  },
  placeholderStyle: {
    flex: 1,
    fontFamily: Fonts.medium,
    fontSize: wp(3.6),
    color: Colors.mediumGrey,
    marginHorizontal: wp(1),
  },
  passwordIcon: {
    color: Colors.eyecolor,
    marginRight: wp(2),
  },
  errorText: {
    color: Colors.red,
    fontSize: Fontsize.xs2,
    marginTop: hp(0.5),
    fontFamily: Fonts.medium,
  },
  erroringStyles: {
    color: Colors.red,
    marginLeft: wp(0.5),
    fontSize: Fontsize.xs2,
  },
});
