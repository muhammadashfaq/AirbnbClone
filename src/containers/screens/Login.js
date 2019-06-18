import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors'
import InputField from '../../components/form/InputField'
import NextArrowButton from '../../components/buttons/NextArrowButton'
import Notification from '../../components/Notification'

class Login extends Component {


    state = {
        formValid: false
    }

    handleNextButton = () => {
        alert('Next button pressed')
    }

    handleCloseNotification = () => {
        this.setState({ formValid: true })
    }

    render() {
        const {  formValid } = this.state
        const showNotification = formValid ? false : true
        const backgroundColor = formValid ? colors.green01 : colors.darkOrange
        return (
            <KeyboardAvoidingView
                style={[styles.wrapper,{ backgroundColor }]}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField
                            labelText={'EMAIL ADDRESS'}
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType={'email'}
                            customStyle={{ marginBottom: 30 }} />
                        <InputField
                            labelText={'PASSWORD'}
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType={'password'}
                            customStyle={{ marginBottom: 30 }} />

                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                        />
                    </View>

                </View>
                <View>
                    <Notification
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type='Error'
                        firstLine="Those credentionls don't look right. "
                        secondLine="Please try again" />
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex'
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    loginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
        height: '100%'
    },
    nextButton: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 20,
        bottom: 20
    }
});

export default Login;
