import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import DeviceSpecFlatlist from '../../Components/DeviceSpecFlatlist'
import { Strings } from '../../Constants/Strings'
import { buildData, ChargingData, ColorsData1, ConditionData, deviceBrands, modelData, osVersionData, RamData, refreshRateData, storageCapacity, wirelessData } from '../../Constants/DummyData'
import { Fonts } from '../../Constants/Fonts'
import MainHeader from '../../Components/MainHeader'
import CustomDropdown from '../../Components/CustomDropdown'
import { Images } from '../../Assets'
import CustomInputText from '../../Components/CustomInputText'
import { hp, wp } from '../../Constants/Responsive'
import { Fontsize } from '../../Constants/Fontsize'
import { Colors } from '../../Constants/Colors'
import RepairingService from '../../Components/RepairingService'
import Btn from '../../Components/Btn'
import PickImage from '../../Components/PickImage'
import { useNavigation } from '@react-navigation/native'

const SellerNewListing = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={MyStyling.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(5) }}>
                <MainHeader title={'Add New Listing'} />
                <DeviceSpecFlatlist title={'Brands'} selectionText={Strings.SelectSpecs} data={deviceBrands} fontFamily={Fonts.semibold} />
                <CustomDropdown data={modelData} radioChecked={false} title={'Model'} areaImage={Images.brand} />
                <DeviceSpecFlatlist title={'Storage'} marginTop={hp(0.1)} selectionText={Strings.storageOptionText} data={storageCapacity} />
                <Text style={styles.titleText}>{'Price Range (PKR)'}</Text>
                <CustomInputText
                    placeholder="Enter Price"
                    icon={Images.price}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <DeviceSpecFlatlist title={'Condition'} marginTop={hp(0)} selectionText={Strings.conditionText} data={ConditionData} />
                <CustomDropdown data={ColorsData1} radioChecked={false} title={'Color'} areaImage={Images.color} selectionText={Strings.selectColor} />
                <DeviceSpecFlatlist title={'RAM'} marginTop={hp(0.1)} selectionText={Strings.selectRam} data={RamData} />
                <Text style={styles.titleText}>{'Processor'}</Text>
                <CustomInputText
                    placeholder={Strings.processorInfo}
                    icon={Images.processor}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <Text style={styles.titleText}>{'Display'}</Text>
                <CustomInputText
                    placeholder={Strings.displayInfo}
                    icon={Images.price}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <CustomDropdown data={ChargingData} radioChecked={false} title={'Charging'} areaImage={Images.charging} selectionText={Strings.charginOption} />
                <DeviceSpecFlatlist title={'Refresh Rate'} marginTop={hp(0.1)} selectionText={Strings.refreshRate} data={refreshRateData} />
                <Text style={styles.titleText}>{'Main Camera'}</Text>
                <CustomInputText
                    placeholder={Strings.mainCamera}
                    icon={Images.camera}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <Text style={styles.titleText}>{'Ultra Wide Camera'}</Text>
                <CustomInputText
                    placeholder={Strings.ultraWideCamera}
                    icon={Images.camera}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <Text style={styles.titleText}>{'Telephoto Camera'}</Text>
                <CustomInputText
                    placeholder={Strings.telephotoCamera}
                    icon={Images.camera}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <Text style={styles.titleText}>{'Front Camera'}</Text>
                <CustomInputText
                    placeholder={Strings.frontCamera}
                    icon={Images.camera}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <DeviceSpecFlatlist title={'Build'} marginTop={hp(0)} selectionText={Strings.bulidMaterial} data={buildData} />
                <DeviceSpecFlatlist title={'Wireless'} marginTop={hp(0)} selectionText={Strings.wirelessFeature} data={wirelessData} />
                <Text style={styles.titleText}>{'Stock'}</Text>
                <CustomInputText
                    placeholder={Strings.noOfProducts}
                    icon={Images.stock}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <RepairingService radioChecked={true} title={Strings.PTaApproved} radioContainer={{ marginTop: hp(1.2) }} />
                <Btn title={'Other Features & Warranty'} btnContainer={{ marginTop: hp(.7) }} />
                <Text style={styles.titleText}>{Strings.aiFeature}</Text>
                <CustomInputText
                    placeholder={Strings.aiFeatureText}
                    icon={Images.ai_Feature}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <Text style={styles.titleText}>{Strings.batteryHealth}</Text>
                <CustomInputText
                    placeholder={Strings.batteryLife}
                    icon={Images.batteryHealth}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                />
                <DeviceSpecFlatlist title={'OS Version'} marginTop={hp(0)} selectionText={Strings.osVersion} data={osVersionData} />
                <Text style={styles.titleText}>{Strings.warrantyStart}</Text>
                <CustomInputText
                    placeholder={Strings.selectDate}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                    style={styles.inputStyle}
                />
                <Text style={styles.titleText}>{Strings.warrantyEnd}</Text>
                <CustomInputText
                    placeholder={Strings.selectDate}
                    keyboardType="decimal-pad"
                    inputContainer={styles.inputContainer}
                    style={styles.inputStyle}

                />
                <Text style={styles.titleText}>{'Description'}</Text>
                <CustomInputText inputContainer={styles.inputContainer1} multiline={true} placeholder={Strings.enterDescription} />
                <Text style={styles.titleText}>{Strings.addPhotos}</Text>
                <PickImage />
                <Btn title={'Preview'} onPress={() => navigation.navigate('DeviceDetail')} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default SellerNewListing

const styles = StyleSheet.create({
    titleText: {
        marginTop: hp(1.5),
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
        color: Colors.black,
    },
    inputContainer: {
        // height: hp(5.3),
        marginTop: 0,
    },
    inputStyle: {
        marginLeft: wp(3)
    },
    inputContainer1: {
        marginTop: 0,
        height: hp(20),
        maxHeight: hp(20),
        paddingHorizontal: wp(2),
        alignItems: 'flex-start',
    },
})