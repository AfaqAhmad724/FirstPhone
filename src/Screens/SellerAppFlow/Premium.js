import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { MyStyling } from '../../Constants/Styling';
import { wp, hp } from '../../Constants/Responsive';
import { Colors } from '../../Constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import PremiumPlan from '../../Components/PremiumPlan';
import PremiumComponent from '../../Components/PremiumComponent';
import { Images } from '../../Assets';

const Premium = () => {
  const [plans] = useState([
    { status: 'Basic', lineone: 'Affordable monthly price.', linetwo: '50 product listings.', linethree: 'Validity: 30 days.', description: 'Best for small sellers who are just starting out.', price: 'PKR 12999' },
    { status: 'Standard ', lineone: 'Affordable monthly price.', linetwo: '150 product listings.', linethree: 'Validity: 30 days.', description: 'Ideal for growing businesses with more product listings.', price: 'PKR 17999' },
    { status: 'Premium', lineone: 'Affordable monthly price.', linetwo: '250 product listings.', linethree: 'Validity: 30 days.', description: 'Perfect for established stores that need more product listings.', price: 'PKR 22999' },
  ]);

  const currentIndex = useSharedValue(0);
  const dotSize = wp(3);

  return (
    <SafeAreaView style={MyStyling.container}>
      <View style={{ marginTop: hp(6) }}>

        <PremiumComponent
          img={Images.crown}
          title="Premium Plan"
          subtitle="Active"
          days={20}
        />
      </View>

      <Carousel
        loop
        autoPlay
        autoPlayInterval={3000}
        width={wp(89.9)}
        height={hp(64)}
        data={plans}
        pagingEnabled
        onSnapToItem={(index) => {
          currentIndex.value = index; // ✅ set active index
        }}
        renderItem={({ item }) => <PremiumPlan {...item} />}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {plans.map((_, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            const isActive = currentIndex.value === index;
            return {
              backgroundColor: withTiming(
                isActive ? Colors.primary : Colors.silverGrey,
                { duration: 300 }
              ),
              transform: [
                { scale: withTiming(isActive ? 1.2 : 1, { duration: 300 }) },
              ],
            };
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                { width: dotSize, height: dotSize, borderRadius: dotSize / 2 },
                animatedStyle,
              ]}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Premium;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  dot: {
    marginHorizontal: wp(1),
  },
});
