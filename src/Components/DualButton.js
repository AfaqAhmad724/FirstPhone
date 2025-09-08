import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../Constants/Colors'
import { hp, wp } from '../Constants/Responsive'
import Btn from './Btn'
import { Strings } from '../Constants/Strings'

const DualButton = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.btnView}>
            <Btn
                title={Strings.resetFilter}
                btnContainer={styles.btnContainer}
                btnTitle={{ color: Colors.black }}
                onPress={() => { }} />
            <Btn
                title={Strings.applyFilter}
                btnContainer={styles.filterBtn}
                onPress={() => navigation.goBack()} />
        </View>
    )
}

export default DualButton

const styles = StyleSheet.create({
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnContainer: {
        width: wp(43),
        backgroundColor: Colors.bg,
        borderWidth: wp(.4),
        borderColor: Colors.dimGrey,
        paddingVertical: wp(2),
        marginTop: hp(.5),

    },
    filterBtn: {
        width: wp(43),
        paddingVertical: wp(2),
        marginTop: hp(.5),

    }

})