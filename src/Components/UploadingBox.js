import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../Constants/Colors';
import { hp, wp } from '../Constants/Responsive';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { selectImage } from '../Functions/MediaManager';
const UploadingBox = props => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageSelection = image => {
    setSelectedImage(image.uri);
    setImageSize({ width: image.width, height: image.height });
  };
  return (
    <TouchableOpacity
      style={styles.uploadBox}
      onPress={() =>
        selectImage(image => handleImageSelection(image, props.title))
      }
    >
      {selectedImage ? (
        <Image
          source={{ uri: selectedImage }}
          style={[styles.image, { width: '100%', height: '100%' }]}
          resizeMode="contain"
        />
      ) : (
        <>
          <Text style={styles.normalText}>{props.title}</Text>
          <View style={styles.uploadMain}>
            <Text style={styles.clickText}>Click</Text>
            <Text style={styles.uploadText}> to upload</Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};
export default UploadingBox;

const styles = StyleSheet.create({
  uploadBox: {
    width: wp(90),
    height: hp(27),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.primary,
    borderRadius: wp(2),
    marginTop: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.bg,
  },
  normalText: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xsm1,
    color: Colors.graay,
    marginBottom: hp(0.5),
    textAlign: 'center',
  },
  uploadMain: { flexDirection: 'row', alignItems: 'center' },
  clickText: {
    fontFamily: Fonts.medium,
    fontSize: Fontsize.sm1,
    color: Colors.primary,
    textAlign: 'center',
  },
  uploadText: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xsm1,
    color: Colors.graay,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    borderRadius: wp(2),
    backgroundColor: Colors.offWhite,
  },
});
