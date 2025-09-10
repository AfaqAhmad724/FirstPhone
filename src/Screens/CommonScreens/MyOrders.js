// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { MyStyling } from '../../Constants/Styling'
// import { Fontsize } from '../../Constants/Fontsize'
// import { Fonts } from '../../Constants/Fonts'
// import { hp, wp } from '../../Constants/Responsive'
// import { Colors } from '../../Constants/Colors'
// import { Strings } from '../../Constants/Strings'
// import MainHeader from '../../Components/MainHeader'

// const MyOrders = () => {

//     return (
//         <SafeAreaView style={MyStyling.container}>
//             <MainHeader title={'My Orders'} />
//             <Text style={styles.orderText}>Active Orders</Text>
//             <View style={{ marginLeft: wp(1) }}>
//                 <Text style={styles.address}>{Strings.activeOrder}</Text>
//             </View>
//             {/* <OrdersList /> */}
//             {/* <OrdersTopTabNavigation /> */}
//         </SafeAreaView>
//     )
// }

// export default MyOrders

// const styles = StyleSheet.create({
//     orderText: {
//         marginTop: hp(3),
//         color: Colors.black,
//         fontFamily: Fonts.medium,
//         fontSize: Fontsize.sm1
//     },
//     address: {
//         fontSize: Fontsize.xs1,
//         color: Colors.mediumGrey,
//         maxWidth: wp(88),
//         fontFamily: Fonts.regular
//     },
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyOrders = () => {
    return (
        <View>
            <Text>MyOrders</Text>
        </View>
    )
}

export default MyOrders

const styles = StyleSheet.create({})