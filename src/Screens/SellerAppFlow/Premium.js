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
import { StyleSheet, View } from 'react-native';
import React from 'react';
import PremiumComponent from '../../Components/PremiumComponent';
import PremiumComponenttwo from '../../Components/PremiumComponenttwo';

const Premium = () => {
  return (
    <View>
      <PremiumComponent
        img={require('../../Assets/Images/crown.png')}
        title="Premium Plan"
        subtitle="Active"
        days={20}
      />

      <PremiumComponenttwo status="Best for small sellers who are just starting out." />
    </View>
  );
};

export default Premium;

const styles = StyleSheet.create({});
