import { Image, StyleSheet, View } from 'react-native'
import React, { useState, useRef } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import Video from 'react-native-video';
import { ImagesData } from '../Constants/DummyData';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';

const CaroselAnimation = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleVideoEnd = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Carousel
                ref={carouselRef}
                width={wp(100)}
                height={wp(84)}
                data={ImagesData}
                loop
                autoPlay={activeIndex !== 0}
                autoPlayInterval={3000}
                scrollAnimationDuration={2000}
                onProgressChange={(_, absoluteProgress) => {
                    const newIndex = Math.round(absoluteProgress);
                    if (newIndex !== activeIndex) {
                        setActiveIndex(newIndex);
                    }
                }}
                renderItem={({ item, index }) =>
                    item.type === 'video' ? (
                        <Video
                            source={{ uri: item.video }}
                            style={styles.videoStyle}
                            resizeMode="contain"
                            paused={false}
                            repeat={false}
                            controls
                            onEnd={handleVideoEnd}
                        />
                    ) : (
                        <Image
                            source={item.image}
                            style={styles.imgStyle}
                            resizeMode="contain"
                        />
                    )
                }
            />


            <View style={styles.pagination}>
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
    );
};

export default CaroselAnimation;

const styles = StyleSheet.create({
    imgStyle: {
        width: wp(92),
        height: wp(84),
        alignSelf: 'center',
    },
    videoStyle: {
        width: wp(92),
        height: wp(84),
        alignSelf: 'center',
        backgroundColor: '#000',
    },
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(2),
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
});
