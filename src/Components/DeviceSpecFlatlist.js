import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { deviceBrands } from '../Constants/DummyData'
import DeviceSpecsBox from './DeviceSpecsBox'
import { hp, wp } from '../Constants/Responsive'
import { Strings } from '../Constants/Strings'

const DeviceSpecFlatlist = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    return (
        <View style={{ marginTop: props?.marginTop || hp(1.5) }}>
            <Text style={[styles.title, { fontFamily: props?.fontFamily || Fonts.medium, fontSize: props?.fontSize || Fontsize.s }]}>{props?.title}</Text>
            <FlatList
                data={props?.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ marginRight: wp(2), marginTop: hp(.2) }}>
                        <DeviceSpecsBox
                            title={item?.name}
                            index={item.id}
                            selectedIndex={selectedIndex}
                            onSelect={setSelectedIndex} />
                    </View>
                )} />
            <Text style={styles.selection}>{props?.selectionText || 'Please Select'}</Text>

        </View>
    )
}

export default DeviceSpecFlatlist

const styles = StyleSheet.create({
    title: {
        color: Colors.black,
    },
    selection: {
        marginTop: hp(.2),
        color: Colors.semiTransparentBlack,
        fontSize: Fontsize.xs,
        fontFamily: Fonts.regular
    }
})