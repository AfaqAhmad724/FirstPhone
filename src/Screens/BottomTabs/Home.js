import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Images } from '../../Assets'
import { MyStyling } from '../../Constants/Styling'
import { Colors } from '../../Constants/Colors'
import { hp, wp } from '../../Constants/Responsive'
import CustomerHomeHeader from '../../Components/CustomerHomeHeader'
import { Fontsize } from '../../Constants/Fontsize'
import { Fonts } from '../../Constants/Fonts'
import VerticalFlatlist from '../../Components/VerticalFlatlist'
import HorizontalFlatlist from '../../Components/HorizontalFlatlist'

const Home = () => {
    return (
        <SafeAreaView style={MyStyling.container1}>
            <ScrollView >

                <CustomerHomeHeader />
                <View style={styles.dateStyle}>
                    <Text style={styles.dateText}>Date</Text>
                    <Image source={Images.sorting} />
                </View>
                <View style={styles.nearbyView}>
                    <Text style={styles.nearbyText}>Nearby</Text>
                    <Text style={[styles.nearbyText, { color: Colors.primary }]}>View all</Text>
                </View>
                <VerticalFlatlist />
                <View style={styles.nearbyView}>
                    <Text style={styles.nearbyText}>Top Selling</Text>
                    <Text style={[styles.nearbyText, { color: Colors.primary }]}>View all</Text>
                </View>
                <HorizontalFlatlist />
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    dateText: {
        color: Colors.gray,
        fontSize: Fontsize.s,
        fontFamily: Fonts.semibold,
        marginRight: wp(1)
    },
    dateStyle: {
        marginTop: hp(.5),
        paddingHorizontal: wp(5),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    nearbyText: {
        color: Colors.black,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.xsm
    },
    nearbyView: {
        marginTop: hp(1),
        paddingHorizontal: wp(5),
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})