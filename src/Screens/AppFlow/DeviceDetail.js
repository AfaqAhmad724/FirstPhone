import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DeviceSpecifications from '../../Components/DeviceSpecifications'
import { deviceFeatures, deviceSpecsData } from '../../Constants/DummyData'
import { hp, wp } from '../../Constants/Responsive'
import WarrantyDetail from '../../Components/WarrantyDetail'
import DeviceDescription from '../../Components/DeviceDescription'
import AddToCartCounter from '../../Components/AddToCartCounter'
import MainHeader from '../../Components/MainHeader'
import CaroselAnimation from '../../Components/CaroselAnimation'

const DeviceDetail = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: wp(5) }}>
                    <MainHeader title={'Device Detail'} />
                </View>
                <CaroselAnimation />
                <View style={styles.bottomView}>
                    <DeviceSpecifications data={deviceSpecsData} title={'Specifications'} />
                    <DeviceSpecifications data={deviceFeatures} title={'Other Features'} />
                    <WarrantyDetail title={'Warranty Details'} />
                    <DeviceDescription title={'Description'} info={true} />
                    <AddToCartCounter />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default DeviceDetail

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    bottomView: {
        paddingHorizontal: wp(5),
        marginTop: hp(2)
    }
})
