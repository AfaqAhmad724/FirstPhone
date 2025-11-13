import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Image } from 'react-native';
import { wp, hp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const GoogleAutoCompleteInput = ({ placeholder, onSelectLocation, icon }) => {
  return (
    <View style={{ marginTop: hp(2), zIndex: 999 }}>
      {' '}
      {/* <-- added zIndex */}
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        fetchDetails={true}
        enablePoweredByContainer={false}
        query={{
          key: 'AIzaSyBuqZO_NrSp3c7lSpGdI3tpVV8h7UdLMFM',
          language: 'en',
        }}
        onPress={(data, details = null) => {
          if (onSelectLocation && details) {
            onSelectLocation(details.formatted_address, details);
          }
        }}
        styles={{
          textInputContainer: {
            width: '100%',
          },
          textInput: {
            height: hp(6),
            fontSize: Fontsize.m,
            color: Colors.black,
            borderRadius: wp(2),
            paddingLeft: wp(10),
            backgroundColor: Colors.white,
          },
          listView: {
            backgroundColor: Colors.white,
            zIndex: 9999, // <-- forces list above all views
            elevation: 10, // <-- Android fix for shadow layering
            position: 'absolute',
            top: hp(6),
            width: '100%',
          },
          description: {
            color: Colors.black,
          },
        }}
        textInputProps={{
          placeholderTextColor: Colors.grey,
        }}
      />
      {icon && (
        <Image
          source={icon}
          style={{
            width: wp(5),
            height: wp(5),
            position: 'absolute',
            left: wp(3),
            top: hp(1.5),
            tintColor: Colors.grey,
          }}
        />
      )}
    </View>
  );
};

export default GoogleAutoCompleteInput;
