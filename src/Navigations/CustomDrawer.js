import {
    ActivityIndicator,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';
// import ModalComponent from '../Components/ModalComponent';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { Images } from '../Assets';
import { Screen } from 'react-native-screens';

export default function CustomDrawer({ navigation }) {
    const scrollRef = useRef();
    const [loader, setLoader] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const CustomItem = ({ title, icon, onPress }) => {
        return (
            <Pressable style={styles.itemContainer} onPress={onPress}>
                <View style={styles.iconContainer}>
                    <Image source={icon} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.title}>{title}</Text>
                </View>

                <Image
                    source={Images.right_arrow}
                    style={styles.rightIcon}
                    resizeMode="contain"
                />
            </Pressable>
        );
    };

    const LogoutItem = ({ title, icon, onPress }) => {
        return (
            <Pressable style={styles.logoutContainer} onPress={onPress}>
                <View style={styles.iconContainer}>
                    <Image source={icon} style={styles.icon} resizeMode="contain" />
                    <Text style={styles.title}>{title}</Text>
                </View>

                {loader && <ActivityIndicator size={'small'} color={Colors.bg} />}
            </Pressable>
        );
    };

    const handlePress = screen => {
        navigation.navigate(screen);
    };

    // const HandleLogout = () => {
    //   setModalVisible(false)
    //   dispatch(USER_ROLE(null))
    //   dispatch(Remove_User_Data())
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'AuthNavigation' }],
    //   });
    // }

    return (
        <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                resetScrollToCoords={{ x: 0, y: 0 }}
                ref={scrollRef}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1 }}>
                {/* <Image
                    source={Images.sideBarImg}
                    style={styles.img}
                    resizeMode='contain'
                    tintColor={Colors.bg}
                /> */}
                <Image
                    source={Images.sideBarImg}
                    style={styles.img}
                    resizeMode="contain"
                />


                <View style={styles.container}>
                    <CustomItem
                        title={'Register As Vendor'}
                        icon={Images.vendorregister}
                    // onPress={() => handlePress('MyProfile')}
                    />
                    <CustomItem
                        title={'My Profile'}
                        icon={Images.profileIcon}
                        onPress={() => handlePress('MyProfile')}
                    />
                    <CustomItem
                        title={'Notifications'}
                        icon={Images.notification}
                        onPress={() => handlePress('Notifications')}
                    />
                    <CustomItem
                        title={'Change Password'}
                        icon={Images.changePassword}
                        // onPress={() => handlePress('AuthNavigation', { screen: 'ResetPassword' })}
                        onPress={() =>
                            handlePress('AuthNavigation', {
                                screen: 'ResetPassword',
                                index: 0, // yahan index specify kar rahe ho
                            })
                        }

                    />

                    <CustomItem
                        title={'Contact Us'}
                        icon={Images.contactUs}
                    // onPress={() => handlePress('ContactUs')}
                    />

                    <CustomItem
                        title={'Privacy Policy'}
                        icon={Images.privacyPolicy}
                    // onPress={() => handlePress('PrivacyPolicy')}
                    />
                    <CustomItem
                        title={"FAQ's"}
                        icon={Images.FAQ}
                    // onPress={() => handlePress('FAQ')}
                    />
                    <CustomItem
                        title={'Terms and Conditions'}
                        icon={Images.termsAndCondition}
                    // onPress={() => handlePress('TermsConditions')}
                    />

                    <LogoutItem
                        title={'Logout'}
                        icon={Images.logOut}
                        onPress={() => setModalVisible(true)}
                    />
                </View>

                {/* {modalVisible && (
            <ModalComponent
              visible={modalVisible}
              icon={'logout'}
              type={'simple-line-icon'}
              title={'Logout'}
              description={'Are you sure you want to logout?'}
              selectBtnTxt={'LOGOUT'}
              cancelBtnTxt={'CANCEL'}
              pressCancelbtn={() => setModalVisible(false)}
              pressSelectbtn={() => HandleLogout()}
            />
          )} */}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    crossContainer: {
        position: 'absolute',
        right: wp(2),
        top: hp(1),
        zIndex: 1,
    },
    img: {
        width: wp(60),
        height: wp(25),
        alignSelf: 'center',
    },
    container: {
        marginHorizontal: wp(2.5),
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(1.5),
    },
    logoutContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingBottom: hp(2)
    },
    rightIcon: {
        width: wp(4),
        height: wp(4),
    },
    icon: {
        width: wp(5),
        height: hp(2.7),
    },
    title: {
        color: Colors.bg,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
        marginLeft: wp(2),
        lineHeight: Fontsize.mm,
        textTransform: 'capitalize',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
