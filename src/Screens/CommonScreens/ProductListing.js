import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import MyListingFlatlist from '../../Components/MyListingFlatlist'
import AddListingSection from '../../Components/AddListingSection'
import MainHeader from '../../Components/MainHeader'
import PremiumComponent from '../../Components/PremiumComponent'
import { Images } from '../../Assets'
import { myListingData, SelerListingData } from '../../Constants/DummyData'
import { useSelector } from 'react-redux'
import { hp } from '../../Constants/Responsive'

const ProductListing = () => {
    const userRole = useSelector((state) => state?.ROLE?.userData)

    return (
        <SafeAreaView style={MyStyling.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }} >

                <MainHeader title={'My Listing'} />
                {
                    userRole == 'Seller' &&
                    <PremiumComponent
                        img={Images.crown}
                        title="Premium Plan"
                        subtitle="Active"
                        days={20}
                        marginTop={hp(3)}
                    />
                }
                <AddListingSection />
                <MyListingFlatlist data={userRole == 'Seller' ? SelerListingData : myListingData} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default ProductListing

const styles = StyleSheet.create({


})