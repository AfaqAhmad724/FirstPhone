// // src/Components/ConfirmModal.js
// import React from 'react';
// import { Modal, StyleSheet, Text, View, Pressable } from 'react-native';
// import { wp, hp } from '../Constants/Responsive';
// import { Colors } from '../Constants/Colors';
// import { Fonts } from '../Constants/Fonts';
// import { Fontsize } from '../Constants/Fontsize';

// const ConfirmModal = ({ visible, onCancel, onConfirm, title }) => {
//     return (
//         <Modal
//             visible={visible}
//             transparent
//             animationType="fade"
//             onRequestClose={onCancel}>
//             <View style={styles.modalOverlay}>
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.modalTitle}>{title}</Text>
//                     <View style={styles.modalActions}>
//                         <Pressable
//                             style={[styles.modalButton, styles.cancelBtn]}
//                             onPress={onCancel}>
//                             <Text style={styles.btnText}>CANCEL</Text>
//                         </Pressable>
//                         <Pressable
//                             style={[styles.modalButton, styles.logoutBtn]}
//                             onPress={onConfirm}>
//                             <Text style={styles.btnText}>LOGOUT</Text>
//                         </Pressable>
//                     </View>
//                 </View>
//             </View>
//         </Modal>
//     );
// };

// export default ConfirmModal;

// const styles = StyleSheet.create({
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.5)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContainer: {
//         width: wp(80),
//         backgroundColor: Colors.bg,
//         borderRadius: wp(2),
//         padding: wp(5),
//     },
//     modalTitle: {
//         fontFamily: Fonts.medium,
//         fontSize: Fontsize.m,
//         color: Colors.primary,
//         marginBottom: hp(2),
//         textAlign: 'center',
//     },
//     modalActions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     modalButton: {
//         padding: wp(3),
//         borderRadius: wp(2),
//         flex: 1,
//         marginHorizontal: wp(1),
//     },
//     cancelBtn: {
//         backgroundColor: Colors.primary,
//     },
//     logoutBtn: {
//         backgroundColor: Colors.red,
//     },
//     btnText: {
//         color: Colors.bg,
//         textAlign: 'center',
//         fontFamily: Fonts.medium,
//     },
// });


import React from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
} from 'react-native';
import { hp, wp } from '../Constants/Responsive';
import { Colors } from '../Constants/Colors';
import { Fonts } from '../Constants/Fonts';
import { Fontsize } from '../Constants/Fontsize';
import { Images } from '../Assets';

export default function LogoutModal({ visible, onCancel, onConfirm }) {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={onCancel}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {/* Icon */}
                    <View style={styles.iconWrapper}>
                        <Image
                            source={Images.sideBarImg}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Title */}
                    <Text style={styles.title}>Confirm Logout</Text>
                    <Text style={styles.description}>
                        Are you sure you want to Logout?
                    </Text>

                    {/* Buttons */}
                    <View style={styles.actions}>
                        <Pressable
                            style={[styles.btn, styles.cancelBtn]}
                            onPress={onCancel}>
                            <Text style={styles.cancelTxt}>Cancel</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.btn, styles.logoutBtn]}
                            onPress={onConfirm}>
                            <Text style={styles.logoutTxt}>Logout</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: wp(90),
        backgroundColor: Colors.bg,
        borderRadius: wp(5),
        paddingVertical: wp(5),
        alignItems: 'center',
        elevation: 8,
    },
    iconWrapper: {
        width: wp(16),
        height: wp(16),
        borderRadius: wp(8),
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp(2),
    },
    icon: {
        width: wp(17),
        height: wp(17),
        tintColor: Colors.bg,
    },
    title: {
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.l,
        color: Colors.primary,
        marginBottom: hp(1),
        textAlign: 'center',
    },
    description: {
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
        color: Colors.dimGrey,
        textAlign: 'center',
        marginBottom: hp(3),
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: wp(4.5)
    },
    btn: {
        paddingVertical: hp(1.2),
        borderRadius: wp(2),
        alignItems: 'center',
        width: wp(38),
    },
    cancelBtn: {
        backgroundColor: Colors.bg,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
    },
    logoutBtn: {
        backgroundColor: Colors.red,
    },
    cancelTxt: {
        color: Colors.dimGrey,
        fontFamily: Fonts.medium,
        fontSize: Fontsize.s,
    },
    logoutTxt: {
        color: Colors.bg,
        fontFamily: Fonts.semibold,
        fontSize: Fontsize.s,
    },
});
