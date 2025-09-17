import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Colors } from '../Constants/Colors';
import { wp } from '../Constants/Responsive';

const ImagePickerComponent = ({ defaultImage, onImagePicked }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response?.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri;
                setSelectedImage(uri);
                onImagePicked?.(uri);
            }
        });
    };

    const handlePress = () => {
        openGallery();
        // 🔹 future: You can add ActionSheet for Camera vs Gallery option
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image
                source={selectedImage ? { uri: selectedImage } : defaultImage}
                style={styles.image}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
    image: {
        width: wp('28%'),
        height: wp('28%'),
        borderRadius: wp('28%') / 2,
        borderWidth: 2,
        borderColor: Colors.primary,
        alignSelf: 'center',
        marginTop: 20,
    },
});
