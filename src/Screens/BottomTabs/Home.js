import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../Assets'
import { MyStyling } from '../../Constants/Styling'
import { Colors } from '../../Constants/Colors'
import { hp, wp } from '../../Constants/Responsive'
import CustomerHomeHeader from '../../Components/CustomerHomeHeader'
import { Fontsize } from '../../Constants/Fontsize'
import { Fonts } from '../../Constants/Fonts'
import VerticalFlatlist from '../../Components/VerticalFlatlist'
import HorizontalFlatlist from '../../Components/HorizontalFlatlist'
import ViewAllDevices from '../../Components/ViewAllDevices'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDrawerStatus } from '@react-navigation/drawer'
import { useIsFocused } from '@react-navigation/native'

const Home = () => {
    const isFocused = useIsFocused(); // 👈

    return (
        <SafeAreaView style={MyStyling.container1}>
            {isFocused && (
                <StatusBar
                    backgroundColor={Colors.primary}
                    barStyle={'light-content'}
                />
            )}

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>

                <CustomerHomeHeader />

                <View style={styles.dateStyle}>
                    <Text style={styles.dateText}>Date</Text>
                    <Image source={Images.sorting} />
                </View>

                <ViewAllDevices title={'Nearby'} />

                <View style={{ paddingHorizontal: wp(5) }}>
                    <VerticalFlatlist />
                </View>

                <ViewAllDevices title={'Top Selling'} />

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

})