import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DeviceSpecifications from '../../Components/DeviceSpecifications'
import { MyStyling } from '../../Constants/Styling'
import { deviceFeatures, deviceSpecsData } from '../../Constants/DummyData'
import { hp, wp } from '../../Constants/Responsive'
import { Images } from '../../Assets'
import WarrantyDetail from '../../Components/WarrantyDetail'
import DeviceDescription from '../../Components/DeviceDescription'
import AddToCartCounter from '../../Components/AddToCartCounter'

const DeviceDetail = () => {

    return (
        <SafeAreaView style={MyStyling.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={Images.iphone}
                        style={styles.imgStyle}
                        resizeMode="contain"
                    />

                    {/* Slider */}
                    {/* <Slider
                        style={{ width: width * 0.6, height: 40, marginTop: 20 }}
                        minimumValue={0}
                        maximumValue={ImagesData.length - 1}
                        step={1}
                        value={activeIndex}
                        minimumTrackTintColor="green"
                        maximumTrackTintColor="lightgrey"
                        thumbTintColor="grey"
                        onValueChange={(val) => setActiveIndex(val)}
                    /> */}
                </View>

                <DeviceSpecifications data={deviceSpecsData} title={'Specifications'} />
                <DeviceSpecifications data={deviceFeatures} title={'Other Features'} />
                <WarrantyDetail title={'Warranty Details'} />
                <DeviceDescription title={'Description'} info={true} />
                <AddToCartCounter />

            </ScrollView>
        </SafeAreaView>
    )
}

export default DeviceDetail

const styles = StyleSheet.create({
    imgStyle: {
        width: wp(90),
        height: wp(90),
    },
})
