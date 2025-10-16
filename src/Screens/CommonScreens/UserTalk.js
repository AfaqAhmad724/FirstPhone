import React, { useState, useEffect, useCallback } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import { MyStyling } from '../../Constants/Styling';
import { Images } from '../../Assets';
import { hp, wp } from '../../Constants/Responsive';
import TalkComponent from '../../Components/TalkComponent';
import {
  GiftedChat,
  InputToolbar,
  GiftedAvatar,
  Send,
} from 'react-native-gifted-chat';
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { Fontsize } from '../../Constants/Fontsize';

const UserTalk = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hi Alex, how are you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Alex',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  const renderInputToolbar = props => (
    <View style={styles.inputToolbarWrapper}>
      <TouchableOpacity style={styles.clipButton}>
        <Image source={Images.clip} style={styles.clipIcon} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <InputToolbar
          {...props}
          containerStyle={styles.inputToolbarContainer}
          primaryStyle={styles.inputToolbarPrimary}
        />
      </View>
    </View>
  );
  const renderMessage = props => {
    const { currentMessage, position } = props;
    const isRight = position === 'right';

    const dateObj = new Date(currentMessage.createdAt);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const formattedDate = `${dateObj.getDate()} ${
      months[dateObj.getMonth()]
    }, ${dateObj.getFullYear()}, ${dateObj.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })}`;

    return (
      <View
        style={[
          styles.messageBubble,
          {
            alignSelf: isRight ? 'flex-end' : 'flex-start',
            backgroundColor: isRight ? Colors.primary : Colors.messagingGrey,
          },
        ]}
      >
        <Text
          style={[
            styles.messageText,
            { color: isRight ? Colors.bg : Colors.bg },
          ]}
        >
          {currentMessage.text}
        </Text>

        <Text
          style={[styles.timeText, { color: isRight ? Colors.bg : Colors.bg }]}
        >
          {formattedDate}
        </Text>
      </View>
    );
  };

  const renderSend = props => (
    <Send {...props}>
      <View style={styles.sendBtnInside}>
        <Image source={Images.dataImage} style={styles.sendIcon} />
      </View>
    </Send>
  );

  const CustomAvatar = props => (
    <View style={styles.avatarContainer}>
      <GiftedAvatar {...props} />
    </View>
  );

  const renderDay = props => (
    <View style={styles.dateBubble}>
      <Text style={styles.dateText}>
        {props.currentMessage?.createdAt
          ? props.currentMessage.createdAt.toDateString() ===
            new Date().toDateString()
            ? 'Today'
            : new Date(props.currentMessage.createdAt).toDateString()
          : ''}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={MyStyling.container}>
      <View
        style={[
          styles.innerContainer,
          Platform.OS === 'android' && styles.bottomShadow,
        ]}
      >
        <TalkComponent
          name="Alex"
          profileImage={Images.Alexlogo}
          activeText="Active now"
        />
      </View>

      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
          image: Images.profile,
        }}
        text={text}
        onInputTextChanged={setText}
        renderMessage={renderMessage}
        alwaysShowSend
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        keyboardShouldPersistTaps="always"
        renderAvatar={props => <CustomAvatar {...props} />}
        textInputStyle={styles.textInput}
        placeholder="Write your message"
        multiline={true}
        renderDay={renderDay}
        listViewProps={{ showsVerticalScrollIndicator: false }}
      />
    </SafeAreaView>
  );
};

export default UserTalk;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: wp(10),
  },
  inputToolbarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(4),
  },
  clipButton: {
    marginRight: wp(2),
  },
  clipIcon: {
    width: wp(6.5),
    height: wp(6.5),
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  inputContainer: {
    flex: 1,
  },
  inputToolbarContainer: {
    borderTopWidth: 0,
    backgroundColor: Colors.messageColor,
    borderRadius: wp(4.1),
  },
  inputToolbarPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: Fontsize.s,
    fontFamily: Fonts.regular,
    paddingVertical: hp(0.2),
    paddingHorizontal: wp(2),
    color: Colors.black,
  },
  sendBtnInside: {
    height: hp(3.8),
    width: hp(3.8),
    borderRadius: hp(3),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(2),
    marginBottom: wp(2),
  },
  sendIcon: {
    width: wp(8),
    height: wp(8),
    resizeMode: 'contain',
    tintColor: Colors.bg,
  },
  messageBubble: {
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    maxWidth: '75%',
    marginBottom: wp(2.8),
  },
  messageText: {
    fontFamily: Fonts.regular,
    fontSize: Fontsize.sm1,
  },
  timeText: {
    alignSelf: 'flex-end',
    fontFamily: Fonts.regular,
    fontSize: Fontsize.xxm,
    marginTop: hp(0.4),
    opacity: 0.8,
  },
  dateBubble: {
    alignSelf: 'center',
    backgroundColor: Colors.headerColor,
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    marginVertical: hp(1.5),
  },
  dateText: {
    color: Colors.black,
    fontFamily: Fonts.medium,
    fontSize: Fontsize.xs2,
  },
});
