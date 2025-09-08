import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { wp } from '../Constants/Responsive'
import Entypo from 'react-native-vector-icons/Entypo';

const HideAndSeeDetails = ({ onSelect, checkStatus, title, info }) => {

    return (
        <View style={styles.specsView}>
            {
                info ?
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.specsText}>{title}</Text>
                        <Text style={[styles.specsText, { color: Colors.dimGrey, marginLeft: wp(2) }]}>{'(More Info)'}</Text>
                    </View>
                    :
                    <Text style={styles.specsText}>{title}</Text>

            }
            <TouchableOpacity onPress={() => onSelect(!checkStatus)}>
                <Entypo
                    color={Colors.primary}
                    name={checkStatus ? 'chevron-up' : 'chevron-down'}
                    size={wp(6)}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HideAndSeeDetails

const styles = StyleSheet.create({
    specsView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    specsText: {
        color: Colors.primary,
        fontSize: Fontsize.m,
        fontFamily: Fonts.medium
    },
})