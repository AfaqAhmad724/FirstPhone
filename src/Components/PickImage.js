import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const PickImage = props => {
  const [selectedImages, setSelectedImages] = useState([]);

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const permission =
          Platform.Version >= 33
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

        const granted = await PermissionsAndroid.request(permission, {
          title: 'Storage Permission',
          message: 'App needs access to your gallery to upload CNIC.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Deny',
          buttonPositive: 'Allow',
        });

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          openImagePicker();
        } else {
          Alert.alert(
            'Permission Denied',
            'You need to allow storage permission to upload image.',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      openImagePicker();
    }
  };

  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: props?.register ? 'photo' : 'mixed',
        quality: 1,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uris = response.assets.map(asset => asset.uri);
          setSelectedImages(prev => [...prev, ...uris]);
        }
      },
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageBox}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={[...selectedImages, 'add']}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) =>
        item === 'add' ? (
          <TouchableOpacity
            style={styles.noImageBox}
            onPress={requestStoragePermission} // check permission before opening gallery
          >
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        ) : (
          renderItem({ item })
        )
      }
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default PickImage;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageBox: {
    width: wp(28),
    height: wp(24),
    borderRadius: wp(3),
    backgroundColor: Colors.offWhite,
    margin: wp(1),
    overflow: 'hidden',
  },
  noImageBox: {
    width: wp(28),
    height: wp(24),
    borderRadius: wp(3),
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp(1.5),
    borderWidth: wp(0.4),
    borderColor: Colors.primary,
  },
  plus: {
    fontSize: Fontsize.xxl,
    color: Colors.primary,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
