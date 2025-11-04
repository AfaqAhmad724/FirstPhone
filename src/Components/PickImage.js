import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fontsize } from '../Constants/Fontsize';

const PickImage = props => {
  const [selectedImages, setSelectedImages] = useState([]);
  const setShopPics = props?.setShopIcs;

  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: props?.register ? 'photo' : 'mixed',
        quality: 1,
        selectionLimit: 1,
      },
      response => {
        console.log('response', JSON.stringify(response?.assets, null, 2));

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const newImages = response.assets.map(asset => ({
            uri: asset.uri,
            type: asset.type || 'image/jpeg',
            name: asset.fileName || `image_${Date.now()}.jpg`,
          }));

          setSelectedImages(prev => {
            const updated = [...prev, ...newImages];
            setShopPics(updated);
            return updated;
          });
        }
      },
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageBox}>
      <Image source={item?.uri ? { uri: item.uri } : null} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={[...selectedImages, 'add']}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) =>
        item === 'add' ? (
          <TouchableOpacity style={styles.noImageBox} onPress={openImagePicker}>
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
    borderWidth: wp(.1)
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
