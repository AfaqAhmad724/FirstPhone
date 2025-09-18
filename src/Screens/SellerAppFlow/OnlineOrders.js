import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import CancelledTabs from '../TopTabs/CancelledTabs'
import OrdersList from '../../Components/OrdersList'
import { myOrdersData, myOrdersVendorData } from '../../Constants/DummyData'
import AuthHeader from '../../Components/AuthHeader'
import MainHeader from '../../Components/MainHeader'
import { hp, wp } from '../../Constants/Responsive'
import { Fonts } from '../../Constants/Fonts'
import { Fontsize } from '../../Constants/Fontsize'
import { Colors } from '../../Constants/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native'

const OnlineOrders = (props) => {
    const route = useRoute()
    const title = route?.params?.title
    return (
        <SafeAreaView style={MyStyling.container}>
            <MainHeader title={'Sales Report'} />
            <View style={styles.innerContainer}>
                <Text style={styles.salesStyle}>{title}</Text>
                <View style={styles.lineContainer}>
                    <Text style={styles.todayStyle}>Today</Text>
                    <MaterialIcons
                        name="arrow-drop-down"
                        size={20}
                        color="grey"
                        style={styles.iconStyle}
                    />
                </View>
            </View>
            <OrdersList data={myOrdersVendorData} />
        </SafeAreaView>
    )
}

export default OnlineOrders

const styles = StyleSheet.create({
    innerContainer: {
        marginTop: hp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp(92.2),
    },
    salesStyle: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xsm1,
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todayStyle: {
        fontFamily: Fonts.medium,
        color: Colors.mediumGrey,
    },
})