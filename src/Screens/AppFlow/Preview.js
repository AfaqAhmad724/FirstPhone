import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/Colors'
import MainHeader from '../../Components/MainHeader'
import Btn from '../../Components/Btn'
import { hp, wp } from '../../Constants/Responsive'
import DeviceDescription from '../../Components/DeviceDescription'
import DeviceSpecifications from '../../Components/DeviceSpecifications'
import CaroselAnimation from '../../Components/CaroselAnimation'
import { devicePreviewData } from '../../Constants/DummyData'
import { SafeAreaView } from 'react-native-safe-area-context'

const Preview = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: wp(5) }}>
                    <MainHeader title={'Preview'} />
                </View>
                <CaroselAnimation />
                <View style={styles.bottomView}>
                    <DeviceSpecifications data={devicePreviewData} title={'Specifications'} />
                    <DeviceDescription title={'Description'} info={true} />
                </View>
                <Btn title={' List Now'} />
            </ScrollView>
        </SafeAreaView >
    )
}

export default Preview

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    bottomView: {
        paddingHorizontal: wp(5),
        marginTop: hp(2)
    }
})