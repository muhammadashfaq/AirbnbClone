import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { PropTypes } from "prop-types";
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import ShowLoading from '../components/ShowLoading';

class Login extends Component {
  state = {
    formValid: false,
    validEmail: false,
    emailAddress: "",
    password: "",
    validPassword: false,
    loadingVisible: false
  };

  handleEmailChange = email => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  };

  toggleNextButtonState = () => {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
    if (!this.state.validPassword) {
      if (password.length > 4) {
        //Password has be to at least 6 character long
        this.setState({ validPassword: true });
      }
    } else if (password.length <= 4) {
      this.setState({ validPassword: false });
    }
  };

  handleNextButton = () => {
    this.setState({ loadingVisible: true });

    setTimeout(() => {
      if (this.state.emailAddress === "hello@eman.ie" && this.state.password) {
        alert("Sccess");
        this.setState({ formValid: true, loadingVisible: false });
      } else {
        this.setState({ formValid: false, loadingVisible: false });
      }
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({ formValid: true });
  };

  render() {
    const { formValid, loadingVisible, validEmail, validPassword } = this.state;
    const showNotification = formValid ? false : true;
    const backgroundColor = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 0 : 0;
    return (
      <KeyboardAvoidingView style={[styles.wrapper, { backgroundColor }]}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText={"EMAIL ADDRESS"}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType={"email"}
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handleEmailChange}
            />
            <InputField
              labelText={"PASSWORD"}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType={"password"}
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
            />
          </ScrollView>
        </View>
        <View style={styles.nextButton}>
          <NextArrowButton
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
        </View>
        <View
          style={[
            styles.notificationWrapper,
            { marginTop: notificationMarginTop }
          ]}
        >
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            firstLine="Those credentionls don't look right. "
            secondLine="Please try again"
          />
        </View>
        <ShowLoading visible={loadingVisible} animationType={"fade"} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex"
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
    height: "100%"
  },
  nextButton: {
    position: "absolute",
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  },
  notificationWrapper: {
    position: "relative",
    bottom: 0,
    zIndex: 999
  }
});

export default Login;
