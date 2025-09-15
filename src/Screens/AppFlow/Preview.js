import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../Constants/Colors'
import MainHeader from '../../Components/MainHeader'
import Btn from '../../Components/Btn'
import { hp, wp } from '../../Constants/Responsive'
import DeviceDescription from '../../Components/DeviceDescription'
import DeviceSpecifications from '../../Components/DeviceSpecifications'
import CaroselAnimation from '../../Components/CaroselAnimation'
import { devicePreviewData } from '../../Constants/DummyData'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Preview = () => {
    const navigation = useNavigation()
    const userRole = useSelector((state) => state?.ROLE?.userData)
    const [text, setText] = useState({
        headerText: '',
        buttonText: ''
    })

    useEffect(() => {
        textSelection()
    }, [])
    const textSelection = () => {
        setText(
            userRole === 'Customer'
                ? { headerText: 'Preview', buttonText: 'List Now' }
                : { headerText: 'Device Detail', buttonText: 'Contact Customer' }
        );
    };


    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>
                <View style={{ paddingHorizontal: wp(5) }}>
                    <MainHeader title={text.headerText} />
                </View>
                <CaroselAnimation />
                <View style={styles.bottomView}>
                    <DeviceSpecifications data={devicePreviewData} title={'Specifications'} />
                    <DeviceDescription title={'Description'} info={true} />
                </View>
                <Btn title={text.buttonText} onPress={() => navigation.navigate('Order', { type: 'listing' })} />
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