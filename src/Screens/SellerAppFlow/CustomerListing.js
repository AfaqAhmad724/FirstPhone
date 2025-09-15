import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import VerticalFlatlist from '../../Components/VerticalFlatlist'
import { MyStyling } from '../../Constants/Styling'
import { hp } from '../../Constants/Responsive'
import MainHeader from '../../Components/MainHeader'
import { Fontsize } from '../../Constants/Fontsize'
import { Fonts } from '../../Constants/Fonts'
import { Colors } from '../../Constants/Colors'

const CustomerListing = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>
                <MainHeader title={'Customers Listing'} />
                <Text style={styles.titleText}>{'Nearby Listings'}</Text>
                <VerticalFlatlist />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CustomerListing

const styles = StyleSheet.create({
    titleText: {
        marginTop: hp(2.5),
        fontSize: Fontsize.sm,
        fontFamily: Fonts.semibold,
        color: Colors.black,
    },
})