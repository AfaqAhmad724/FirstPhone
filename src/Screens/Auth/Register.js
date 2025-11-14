import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import SignUpBody from '../../Components/SignUpBody';
import { Colors } from '../../Constants/Colors';
import { hp } from '../../Constants/Responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  const scrollRef = useRef(null);
  return (
    <SafeAreaView style={styles.fullscreen}>
      <KeyboardAwareScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={hp(30)}
        // contentContainerStyle={{ paddingBottom: hp(5), flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={true} // ensures TextInput scrolls into view
      >
        <SignUpBody scrollRef={scrollRef} />
      </KeyboardAwareScrollView>

    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
});
