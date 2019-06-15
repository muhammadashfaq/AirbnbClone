import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors'
import InputField from '../../components/form/InputField'
import NextArrowButton from '../../components/buttons/NextArrowButton'

class Login extends Component {



    handleNextButton = () => {
        alert('Next button pressed')
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior='padding'
                enabled>
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
                    
                </View>
                <View style={styles.nextButton}>
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
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
        flex: 1
    },
    nextButton: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 20,
        bottom: 20
    }
});

export default Login;
