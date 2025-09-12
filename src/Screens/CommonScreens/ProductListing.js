import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import MyListingFlatlist from '../../Components/MyListingFlatlist'
import AddListingSection from '../../Components/AddListingSection'
import MainHeader from '../../Components/MainHeader'

const ProductListing = () => {
    return (
        <SafeAreaView style={MyStyling.container}>
            <MainHeader title={'My Listing'} />
            <AddListingSection />
            <MyListingFlatlist />
        </SafeAreaView>
    )
}

export default ProductListing

const styles = StyleSheet.create({


})