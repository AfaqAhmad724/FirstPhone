// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { wp } from '../Constants/Responsive'
// import { Image } from 'react-native'

// const CNICPics = (props) => {
//     return (
//         <View style={styles.noImageBox} >
//             <Image source={props?.src} style={styles.imgStyle} />
//         </View>
//     )
// }

// export default CNICPics

// const styles = StyleSheet.create({
//     noImageBox: {
//         // opacity: 0.9,
//         margin: wp(.9),
//     },
//     imgStyle: {
//         width: wp(50),
//         height: wp(30),
//         resizeMode: 'contain'
//     }
// })

import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../Constants/Responsive'

const CNICPics = ({ src }) => {
    return (
        <View style={styles.noImageBox}>
            <Image
                source={src}
                style={styles.imgStyle}
            // resizeMode="contain" // ✅ move here
            />
        </View>
    )
}

export default CNICPics

const styles = StyleSheet.create({
    noImageBox: {
        opacity: 0.6,
        margin: wp(1),
        width: wp(43),
    },
    imgStyle: {
        width: wp(46),   // thoda adjust kiya
        height: wp(28),
    },
})
