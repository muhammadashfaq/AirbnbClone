import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import ShowLoading from '../components/ShowLoading';

class ForgotPassword extends Component {
  state = {
    formValid: true,
    loadingVisible: false,
    validEmail: false,
    emailAddress: ""
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

  gotoNextStep = () => {
    this.setState({ loadingVisible: !this.state.loadingVisible });
    setTimeout(() => {
      if (this.state.emailAddress === "katrina@gmail.com") {
        this.setState({
          loadingVisible: !this.state.loadingVisible,
          formValid: false
        });
      } else {
        this.setState({
          loadingVisible: !this.state.loadingVisible,
          formValid: true
        });
      }
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({ formValid: true });
  };

  render() {
    const { formValid, validEmail } = this.state;
    const background = formValid ? colors.darkOrange : colors.green01;
    const showNotification = formValid ? false : true;
    return (
      <KeyboardAvoidingView
        style={[styles.wrapper, { backgroundColor: background }]}
      >
        <View style={styles.form}>
          <Text style={styles.forgotPasswordHeading}>
            Forgot your password ?
          </Text>
          <Text style={styles.forgotPasswordSubHeading}>
            Enter your email to find your account
          </Text>
          <InputField
            customStyle={{ marginBottom: 30 }}
            textColor={colors.white}
            labelText="EMAIL ADDRESS"
            labelTextSize={14}
            labelColor={colors.white}
            inputType={"email"}
            borderBottomColor={colors.white}
            onChangeText={this.handleEmailChange}
            showCheckmark={validEmail}
          />
        </View>
        <View style={styles.nextButtonWrapper}>
          <NextArrowButton
            handleNextButton={this.gotoNextStep}
            disabled={!validEmail}
          />
        </View>
        <View>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error:"
            firstLine={"No account exists for requested"}
            secondLine={"emailAddress"}
          />
        </View>
        <ShowLoading visible={this.state.loadingVisible} animationType="fade" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex"
  },
  forgotPasswordHeading: {
    fontSize: 28,
    fontWeight: "300",
    color: colors.white
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  forgotPasswordSubHeading: {
    fontWeight: "600",
    color: colors.white,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60
  },
  nextButtonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});

export default ForgotPassword;
