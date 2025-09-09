import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { ImagesData } from '../Constants/DummyData';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Extrapolate, interpolate } from 'react-native-reanimated';

const CaroselAnimation = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={styles.mainContainer}>
            <Carousel
                width={wp(100)}
                height={wp(84)}
                data={ImagesData}
                loop
                autoPlay
                scrollAnimationDuration={2000}
                onSnapToItem={index => setActiveIndex(index)}
                customAnimation={(value) => {
                    'worklet';
                    return {
                        opacity: interpolate(
                            value,
                            [-1, -0.6, 0, 0.6, 1],
                            [0, 0.4, 1, 0.4, 0],
                            Extrapolate.CLAMP
                        ),
                        transform: [
                            {
                                scale: interpolate(
                                    value,
                                    [-1, -0.6, 0, 0.6, 1],
                                    [0.92, 0.95, 1, 0.95, 0.92],
                                    Extrapolate.CLAMP
                                ),
                            },
                        ],
                    };
                }}
                renderItem={({ item }) => (
                    <Image
                        source={item.image}
                        style={styles.imgStyle}
                        resizeMode="contain"
                    />
                )}
            />
            <View
                style={styles.pagination}>
                <View style={styles.paginationContainer}>
                    {ImagesData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                activeIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>
            </View>

        </View>
    )
}

export default CaroselAnimation

const styles = StyleSheet.create({
    imgStyle: {
        width: wp(92),
        height: wp(84),
        alignSelf: 'center',
    },
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(2)
    },
    pagination: {
        backgroundColor: Colors.bg,
        width: wp(90),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        elevation: 3,
    },
    paginationContainer: {
        flexDirection: 'row',
        paddingVertical: hp(1.1),
        justifyContent: 'center',
    },
    dot: {
        width: wp(1.5),
        height: wp(1.5),
        borderRadius: wp(1),
        backgroundColor: Colors.mediumGrey,
        marginHorizontal: wp(.5),
    },
    activeDot: {
        width: wp(5.5),
        height: wp(1.3),
        borderRadius: wp(1),
        backgroundColor: Colors.primary,
    },
})