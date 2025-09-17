import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import { Colors } from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'
import { Fonts } from '../Constants/Fonts'
import { Fontsize } from '../Constants/Fontsize'

const UploadingBox = (props) => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 })

    const openImagePicker = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 1,
                selectionLimit: 1,
            },
            response => {
                if (response.didCancel) {
                    console.log('User cancelled image picker')
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage)
                } else {
                    const uri = response.assets[0].uri
                    // Get original image size to maintain aspect ratio
                    Image.getSize(uri, (width, height) => {
                        setImageSize({ width, height })
                    })
                    setSelectedImage(uri)
                }
            },
        )
    }

    return (
        <TouchableOpacity style={styles.uploadBox} onPress={openImagePicker}>
            {selectedImage ? (
                <Image
                    source={{ uri: selectedImage }}
                    style={[
                        styles.image,
                        { aspectRatio: imageSize.width / imageSize.height || 1 },
                    ]}
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
    )
}

export default UploadingBox

const styles = StyleSheet.create({
    uploadBox: {
        width: wp(90), // fix width of box
        minHeight: hp(20), // minimum height
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
    uploadMain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
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
        height: undefined, // height auto from aspectRatio
        borderRadius: wp(2),
        backgroundColor: Colors.offWhite,
    },
})
