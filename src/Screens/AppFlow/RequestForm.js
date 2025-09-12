import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyStyling } from '../../Constants/Styling'
import MainHeader from '../../Components/MainHeader'
import PriceRangeSlider from '../../Components/PriceRangeSlider'
import RequestFormInputs from '../../Components/RequestFormInputs'
import CustomInputText from '../../Components/CustomInputText'
import { Fontsize } from '../../Constants/Fontsize'
import { Fonts } from '../../Constants/Fonts'
import { Colors } from '../../Constants/Colors'
import DeviceSpecFlatlist from '../../Components/DeviceSpecFlatlist'
import { hp, wp } from '../../Constants/Responsive'
import Btn from '../../Components/Btn'
import { Strings } from '../../Constants/Strings'
import { Images } from '../../Assets'
import { ConditionData } from '../../Constants/DummyData'
import { useNavigation } from '@react-navigation/native'

const RequestForm = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={MyStyling.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MainHeader title={'Request Form'} />
                <View style={{ paddingVertical: hp(2) }}>
                    <RequestFormInputs title={'Brand '} secondTitle={'Model'} icon={Images.brand} secondIcon={Images.model} placeholder={'Enter Brand'} secondPlaceholder={'Enter Model'} />
                    <Text style={styles.titleText}>{Strings.priceRange}</Text>
                    <PriceRangeSlider />
                    <RequestFormInputs title={'Storage Capacity '} secondTitle={'RAM Capacity'} icon={Images.storage} secondIcon={Images.ram} placeholder={'Storage'} secondPlaceholder={'RAM Capacity'} />
                    <Text style={styles.titleText}>Color</Text>
                    <CustomInputText inputContainer={styles.colorInput} placeholder={'Enter Color'} icon={Images.color} />
                    <DeviceSpecFlatlist title={'Condition'} data={ConditionData} selectionText={Strings.conditionText} />
                    <Text style={styles.titleText}>Description</Text>
                    <CustomInputText inputContainer={styles.inputContainer} multiline={true} placeholder={'Enter Description'} />
                    <Btn title={' Submit Request'} onPress={() => navigation.navigate('Order', { type: 'request' })} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RequestForm

const styles = StyleSheet.create({
    titleText: {
        marginTop: hp(1.5),
        fontSize: Fontsize.s,
        fontFamily: Fonts.medium,
        color: Colors.black,
    },
    inputContainer: {
        marginTop: 0,
        height: hp(20),
        maxHeight: hp(20),
        paddingHorizontal: wp(2),
        alignItems: 'flex-start',
    },
    colorInput: {
        marginTop: 0,

    }
})