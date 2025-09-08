// import { StyleSheet, View, Text } from 'react-native'
// import React from 'react'
// import { ColorsData } from '../Constants/DummyData'
// import { hp, wp } from '../Constants/Responsive'
// import { Colors } from '../Constants/Colors'
// import { Fontsize } from '../Constants/Fontsize'
// import { Fonts } from '../Constants/Fonts'

// const NumberOfColors = (props) => {
//     return (
//         <View>
//             <Text style={[styles.title, { fontFamily: props?.fontFamily || Fonts.medium }]}>
//                 Color
//             </Text>
//             <View style={{ flexDirection: 'row' }}>
//                 {ColorsData.map((item, index) => (
//                     <View
//                         key={index}
//                         style={[styles.colorsView, { backgroundColor: item.colorName }]}
//                     />
//                 ))}
//             </View>
//             <Text style={styles.selection}>{props?.selectionText || 'Please Select'}</Text>

//         </View>
//     )
// }

// export default NumberOfColors

// const styles = StyleSheet.create({
//     colorsView: {
//         height: hp(2.3),
//         width: hp(2.3),
//         borderRadius: hp(5),
//         marginRight: wp(2),
//     },
//     title: {
//         marginTop: hp(.5),
//         color: Colors.black,
//         fontSize: Fontsize.s,
//         fontFamily: Fonts.semibold,
//     },
//     selection: {
//         marginTop: hp(.2),
//         color: Colors.semiTransparentBlack,
//         fontSize: Fontsize.xs,
//         fontFamily: Fonts.regular
//     }
// })


import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ColorsData } from '../Constants/DummyData'
import { hp, wp } from '../Constants/Responsive'
import { Colors } from '../Constants/Colors'
import { Fontsize } from '../Constants/Fontsize'
import { Fonts } from '../Constants/Fonts'
import { MyStyling } from '../Constants/Styling'
import { Strings } from '../Constants/Strings'

const NumberOfColors = (props) => {
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <View>
            <Text style={[styles.title, { fontFamily: props?.fontFamily || Fonts.medium }]}>
                Color
            </Text>
            <View style={{ flexDirection: 'row' }}>
                {ColorsData.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedColor(item.colorName)}
                        activeOpacity={0.7}
                    >
                        <View
                            style={[
                                styles.colorsView,
                                { backgroundColor: item.colorName },
                                selectedColor === item.colorName && {
                                    borderWidth: wp(0.5),
                                    borderColor: Colors.black,
                                }
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.selection}>{Strings.mobileColor || 'Please Select'}</Text>
        </View>
    )
}

export default NumberOfColors

const styles = StyleSheet.create({
    colorsView: {
        height: hp(2.3),
        width: hp(2.3),
        borderRadius: hp(5),
        marginRight: wp(2),
    },
    title: {
        marginTop: hp(.5),
        color: Colors.black,
        fontSize: Fontsize.s,
        fontFamily: Fonts.semibold,
    },
    selection: {
        marginTop: hp(.2),
        color: Colors.semiTransparentBlack,
        fontSize: Fontsize.xs,
        fontFamily: Fonts.regular
    }
})
