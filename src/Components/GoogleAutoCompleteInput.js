import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const GoogleAutoCompleteInput = ({
  icon,
  placeholder = 'Enter Location',
  value,
  onChangeText,
  onSelectLocation,
  error,
  inputContainer,
}) => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBuqZO_NrSp3c7lSpGdI3tpVV8h7UdLMFM';


  return (
    <View style={{ marginTop: hp(2), zIndex: 1 }}>
      <View style={[styles.wrapper]}>
        <View style={[styles.inputContainer, inputContainer]}>
          {icon && <Image style={styles.vectorStyle} source={icon} />}

          <View style={{ flex: 1 }}>
            <GooglePlacesAutocomplete
              placeholder={placeholder}
              fetchDetails={true}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
              }}
              onPress={(data, details = null) => {
                onSelectLocation?.(data, details);
              }}
              keyboardShouldPersistTaps='handled'
              textInputProps={{
                placeholderTextColor: Colors.mediumGrey,
                defaultValue: value || '',

              }}
              predefinedPlaces={[]}
              minLength={2}
              debounce={300}
              styles={{
                container: {
                  flex: 1,
                },
                textInputContainer: {
                  padding: 0,
                  margin: 0,
                },
                textInput: {
                  ...styles.placeholderStyle,
                  borderWidth: 0,
                  marginHorizontal: 0,
                  height: hp(6),
                },
                listView: {
                  position: 'absolute',
                  top: hp(6.5),
                  marginLeft: wp(-10),
                  left: wp(2),
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: Colors.verificationColor,
                  borderRadius: wp(1.8),
                  elevation: 10,
                  zIndex: 999,
                },
                description: {
                  color: Colors.grey,
                },
              }}
            />
          </View>
        </View>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default GoogleAutoCompleteInput;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    zIndex: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.verificationColor,
    borderRadius: wp(1.8),
    marginTop: hp(0.5),
    paddingRight: wp(2),
    backgroundColor: '#fff',
    zIndex: 100,
  },
  vectorStyle: {
    marginLeft: wp(2.6),
    resizeMode: 'contain',
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
  errorText: {
    color: Colors.red,
    fontSize: Fontsize.xs2,
    marginTop: hp(0.5),
    fontFamily: Fonts.medium,
  },
});