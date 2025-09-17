import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MyStyling } from '../../Constants/Styling'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../../Components/MainHeader'
import DeviceSpecFlatlist from '../../Components/DeviceSpecFlatlist'
import CustomDropdown from '../../Components/CustomDropdown'
import CustomInputText from '../../Components/CustomInputText'
import { Colors } from '../../Constants/Colors'
import { Images } from '../../Assets'
import { CityData, ConditionData, deviceBrands, modelData, RamData, searchRadiusData, storageCapacity } from '../../Constants/DummyData'
import PriceRangeSlider from '../../Components/PriceRangeSlider'
import { hp, wp } from '../../Constants/Responsive'
import { Fontsize } from '../../Constants/Fontsize'
import { Fonts } from '../../Constants/Fonts'
import PriceRangeInputs from '../../Components/PriceRangeInputs'
import { Strings } from '../../Constants/Strings'
import NumberOfColors from '../../Components/NumberOfColors'
import RepairingService from '../../Components/RepairingService'
import Btn from '../../Components/Btn'
import { useNavigation } from '@react-navigation/native'
import DualButton from '../../Components/DualButton'

const SearchFilter = () => {
    const [searchCity, setSearchCity] = useState(false)

    console.log('====================================');
    console.log('serachcity', searchCity);
    console.log('====================================');
    return (
        <SafeAreaView style={MyStyling.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <MainHeader title={'Search Filter'} />
                <DeviceSpecFlatlist title={'Brands'} selectionText={Strings.SelectSpecs} data={deviceBrands} fontFamily={Fonts.semibold} />
                <CustomDropdown data={modelData} radioChecked={false} title={'Model'} areaImage={Images.brand} />
                <Text style={styles.titleText}>{'Price Range (PKR)'}</Text>
                <PriceRangeSlider />
                <DeviceSpecFlatlist title={'Storage Capacity'} marginTop={hp(0.1)} selectionText={Strings.selectStorageText} data={storageCapacity} />
                <DeviceSpecFlatlist title={'RAM Capacity'} marginTop={hp(.6)} selectionText={Strings.selectStorageText} data={RamData} />
                <DeviceSpecFlatlist title={'Condition'} marginTop={hp(0.6)} selectionText={Strings.conditionText} data={ConditionData} />
                <NumberOfColors />
                <RepairingService radioChecked={true} title={Strings.serviceText} />
                <DeviceSpecFlatlist title={'Search Radius'} marginTop={hp(0.6)} selectionText={Strings.radiusSearch} data={searchRadiusData} fontSize={Fontsize.sm} isCitySelected={searchCity} />
                <CustomDropdown data={CityData} radioChecked={true} title={'Search By City'} selectionText={Strings.searchMobiles} position={'top'} areaImage={Images.city} onRadioPress={setSearchCity} />
                <DualButton />
            </ScrollView>

        </SafeAreaView>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: hp(5),
    },
    titleText: {
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
        color: Colors.black,
    },

})