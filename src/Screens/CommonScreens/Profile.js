import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Fonts } from '../../Constants/Fonts';
import { hp, wp } from '../../Constants/Responsive';
import { Colors } from '../../Constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileComponent from '../../Components/ProfileComponent';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topstyle}>
          <Text style={styles.accountStyle}>Account</Text>

          <View style={styles.box1}>
            <Image
              source={require('../../Assets/Images/MyProfile.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>Jose Larry</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={wp(7)}
              color="black"
            />
          </View>

          <View style={styles.divider}></View>
          <Text style={styles.optionStyle}>More Options</Text>
        </View>

        <ProfileComponent
          icon="notifications"
          title="Notifications"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon="lock"
          title="Change Password"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon="article"
          title="My Orders"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon="phone-in-talk"
          title="Contact US"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon="help-outline"
          title="FAQ's"
          iconColor={Colors.primary}
        />

        <ProfileComponent
          icon="privacy-tip"
          title="Privacy Policy"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon="description"
          title="Terms and Conditions"
          iconColor={Colors.primary}
        />
        <ProfileComponent
          icon="person-remove"
          title="Delete Account"
          iconColor={Colors.primary}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  topstyle: {
    marginLeft: wp(6),
    marginTop: hp(6.8),
  },
  accountStyle: {
    fontFamily: Fonts.semibold,
    fontSize: wp(4.3),
    marginBottom: hp(2),
  },
  box1: {
    width: wp(88.9),
    height: wp(13),
    backgroundColor: '#F8F7F7',
    borderRadius: wp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(1),
    marginBottom: hp(2),
  },
  imageStyle: {
    width: wp(13.8),
    height: wp(13.8),
    borderRadius: wp(13.8) / 2,
    resizeMode: 'contain',
  },
  nameStyle: {
    flex: 1,
    fontFamily: Fonts.semibold,
    fontSize: wp(3.79),
    marginLeft: wp(3),
  },

  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#A9A6A69E',
    marginTop: hp(1.3),
    marginRight: wp(5.6),
  },
  optionStyle: {
    fontFamily: Fonts.semibold,
    marginTop: wp(2.6),
  },
});

// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import React from 'react';
// import { Fonts } from '../../Constants/Fonts';
// import { hp, wp } from '../../Constants/Responsive';
// import { Colors } from '../../Constants/Colors';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import ProfileComponent from '../../Components/ProfileComponent';

// const Profile = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.topstyle}>
//           <Text style={styles.accountStyle}>Account</Text>

//           <View style={styles.box1}>
//             <Image
//               source={require('../../Assets/Images/MyProfile.png')}
//               style={styles.imageStyle}
//             />
//             <Text style={styles.nameStyle}>Jose Larry</Text>
//             <MaterialIcons
//               name="keyboard-arrow-right"
//               size={wp(7)}
//               color={Colors.black}
//             />
//           </View>

//           <View style={styles.divider}></View>
//           <Text style={styles.optionStyle}>More Options</Text>
//         </View>

//         <ProfileComponent
//           icon="notifications"
//           title="Notifications"
//           iconColor={Colors.green}
//         />
//         <ProfileComponent
//           icon="lock"
//           title="Change Password"
//           iconColor={Colors.green}
//         />
//         <ProfileComponent
//           icon="shopping-cart"
//           title="My Orders"
//           iconColor={Colors.green}
//         />
//         <ProfileComponent
//           icon="privacy-tip"
//           title="Privacy Policy"
//           iconColor={Colors.green}
//         />
//         <ProfileComponent
//           icon="help-outline"
//           title="Contact Us"
//           iconColor={Colors.green}
//         />
//         <ProfileComponent
//           icon="description" // fixed icon
//           title="Terms and Conditions"
//           iconColor={Colors.green}
//         />
//         <ProfileComponent
//           icon="delete"
//           title="Delete Account"
//           iconColor={Colors.green}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.bg,
//   },
//   topstyle: {
//     marginLeft: wp(6),
//     marginTop: hp(6.8),
//   },
//   accountStyle: {
//     fontFamily: Fonts.semibold,
//     fontSize: wp(4.3),
//     marginBottom: hp(2),
//   },
//   box1: {
//     width: wp(88.9),
//     height: wp(13),
//     backgroundColor: '#F8F7F7',
//     borderRadius: wp(1.5),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: wp(1),
//     marginBottom: hp(2),
//   },
//   imageStyle: {
//     width: wp(13.8),
//     height: wp(13.8),
//     borderRadius: wp(13.8) / 2,
//     resizeMode: 'contain',
//   },
//   nameStyle: {
//     flex: 1,
//     fontFamily: Fonts.semibold,
//     fontSize: wp(3.79),
//     marginLeft: wp(3),
//   },
//   divider: {
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#A9A6A69E',
//     marginTop: hp(1.3),
//     marginRight: wp(5.6),
//   },
//   optionStyle: {
//     fontFamily: Fonts.semibold,
//     marginTop: wp(2.6),
//   },
// });
