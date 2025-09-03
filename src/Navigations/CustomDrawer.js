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
            <Pressable style={styles.itemContainer} onPress={onPress}>
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
                <TouchableOpacity
                    style={styles.crossContainer}
                    onPress={() => navigation?.closeDrawer()}>
                    <Icon type="entypo" name="cross" size={wp(7)} color={Colors.bg} />
                </TouchableOpacity>

                <Image
                    source={Images.LOGO}
                    style={styles.img}
                    resizeMode="contain"
                    tintColor={Colors.bg}
                />

                <View style={styles.container}>
                    <CustomItem
                        title={'My Profile'}
                        icon={Images.PERSON}
                        onPress={() => handlePress('MyProfile')}
                    />
                    <CustomItem
                        title={'Change Password'}
                        icon={Images.PASSWORD}
                        onPress={() => handlePress('ChangePassword')}
                    />

                    <CustomItem
                        title={'Notifications'}
                        icon={Images.NOTIFICATIONS}
                        onPress={() => handlePress('Notifications')}
                    />
                    <CustomItem
                        title={'My Orders'}
                        icon={Images.ORDERS}
                        onPress={() => handlePress('MyOrders')}
                    />

                    <CustomItem
                        title={'Help Center'}
                        icon={Images.HELP_CENTER}
                        onPress={() => handlePress('HelpCenter')}
                    />
                    <CustomItem
                        title={'Privacy Policy'}
                        icon={Images.PRIVACY_POLICY}
                        onPress={() => handlePress('PrivacyPolicy')}
                    />
                    <CustomItem
                        title={'Terms and Conditions'}
                        icon={Images.TERMSCONDITIONS}
                        onPress={() => handlePress('TermsConditions')}
                    />

                    <LogoutItem
                        title={'Logout'}
                        icon={Images.LOGOUT}
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
        width: wp(72),
        height: hp(28),
        alignSelf: 'center',
        opacity: 0.66,
    },
    container: {
        marginHorizontal: wp(2.5),
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(3),
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
    btnContainer: {
        backgroundColor: Colors.secondary,
        width: wp('55%'),
        // position: 'absolute',
        bottom: hp(5),
    },
    btnText: {
        fontSize: Fontsize.sm,
        fontFamily: Fonts.semibold,
    },
});
