// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import PremiumComponent from '../../Components/PremiumComponent';

// const Premium = () => {
//   return (
//     <View>
//       <PremiumComponent />
//     </View>
//   );
// };

// export default Premium;

// const styles = StyleSheet.create({});
import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import PremiumComponent from '../../Components/PremiumComponent';
import PremiumComponenttwo from '../../Components/PremiumComponenttwo';
import { MyStyling } from '../../Constants/Styling';

const Premium = () => {
  return (
    <SafeAreaView style={[MyStyling.container]}>
      <PremiumComponent
        img={require('../../Assets/Images/crown.png')}
        title="Premium Plan"
        subtitle="Active"
        days={20}
      />

      <PremiumComponenttwo
        status="Best for small sellers who are just starting out."
        lineone="Affordable monthly price."
        linetwo=" 50 product listings."
        linethree=" Validity: 30 days. "
      />
    </SafeAreaView>
  );
};

export default Premium;

const styles = StyleSheet.create({});
