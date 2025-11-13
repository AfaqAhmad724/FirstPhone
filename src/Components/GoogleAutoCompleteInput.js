import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBuqZO_NrSp3c7lSpGdI3tpVV8h7UdLMFM';

const GoogleAutoCompleteInput = ({
  icon,
  placeholder,
  value,
  onSelectLocation,
  error,
}) => {
  return (
    <View style={{ marginTop: hp(2) }}>
      <View style={styles.inputWrapper}>
        {icon && <Image source={icon} style={styles.iconStyle} />}
        <View style={{ flex: 1 }}>
          <GooglePlacesAutocomplete
            placeholder={value || placeholder}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={2}
            predefinedPlaces={[]}
            debounce={300}
            textInputProps={{}}
            timeout={1000}
            keyboardShouldPersistTaps="handled" // ensures taps register inside ScrollView
            listViewDisplayed="auto" // avoids scroll conflicts
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
              types: 'geocode',
            }}
            onPress={(data, details = null) => {
              if (!details?.geometry?.location) return;
              const address = details.formatted_address;
              onSelectLocation?.(address, details);
            }}
            styles={{
              container: { flex: 0 },
              textInputContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: Colors.verificationColor,
                borderRadius: wp(1.8),
                paddingHorizontal: wp(2),
                height: hp(6),
              },
              textInput: {
                flex: 1,
                fontSize: wp(3.6),
                fontFamily: Fonts.medium,
                color: Colors.mediumGrey,
              },
              listView: {
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: Colors.verificationColor,
                borderRadius: wp(1.8),
                elevation: 5,
                marginTop: hp(1),
              },
              description: { color: Colors.grey },
            }}
          />
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: wp(5.3),
    height: wp(5.3),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  errorText: {
    color: Colors.red,
    fontSize: Fontsize.xs2,
    marginTop: hp(0.5),
    fontFamily: Fonts.medium,
  },
});

export default GoogleAutoCompleteInput;
