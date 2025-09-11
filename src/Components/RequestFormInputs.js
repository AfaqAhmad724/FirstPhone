import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInputText from './CustomInputText'
import { Images } from '../Assets'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { Colors } from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'

const RequestFormInputs = (props) => {
    const [data, setData] = useState({
        brand: '',
        model: ''
    })

    const handleInput = (text, name) => {
        setData(prev => ({
            ...prev,
            [name]: text
        }))
    }

    return (
        <View style={[styles.mainView, props?.mainView]}>
            <View>
                <Text style={styles.titleText}>{props?.title || 'Select'}</Text>
                <CustomInputText
                    value={data.brand}
                    placeholder={props?.placeholder}
                    icon={props?.icon}
                    keyboardType="default"
                    inputContainer={styles.inputContainer}
                    onChangeText={txt => handleInput(txt, 'brand')}
                />
            </View>
            <View>
                <Text style={styles.titleText}>{props?.secondTitle || 'Select'}</Text>
                <CustomInputText
                    value={data.model}
                    placeholder={props?.secondPlaceholder}
                    icon={props?.secondIcon}
                    keyboardType="default"
                    inputContainer={styles.inputContainer}
                    onChangeText={txt => handleInput(txt, 'model')}
                />
            </View>
        </View>
    )
}

export default RequestFormInputs

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
        color: Colors.black,
        marginBottom: hp(0.5)
    },
    inputContainer: {
        width: wp(41.7),
        height: hp(5.3),
        marginTop: 0,
    },
})
