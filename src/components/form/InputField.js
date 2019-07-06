import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors'


class InputField extends Component {

    state = {
        secureInput: this.props.inputType === 'text' || this.props.inputType === 'email' ? false : true,
        scaleCheckmarkValue: new Animated.Value(0)
    }
    toggleShowPassword = () => {
        this.setState({ secureInput: !this.state.secureInput });
    }

    scaleCheckmark = (value) => {
        const { scaleCheckmarkValue } = this.state
        Animated.timing(
            scaleCheckmarkValue, {
                toValue: value,
                duration: 400,
                easing: Easing.easeOutBack
            }
        ).start();
    }

    render() {
        const { labelText, labelTextSize, labelColor,
            textColor, borderBottomColor, inputType,
             customStyle, onChangeText,showCheckmark
            ,autoFocus } = this.props;
        const { secureInput,scaleCheckmarkValue } = this.state;
        const fontSize = labelTextSize || 14
        const color = labelColor || colors.white
        const inputColor = textColor || colors.white
        const borderBottom = borderBottomColor || 'trasnsparent'
        const keyboaredType = inputType === 'email' ? 'email-address' : 'default'

        //Check mark animation
        const iconScale = scaleCheckmarkValue.interpolate({
            inputRange: [0,0.5,1],
            outputRange: [0,1.6,1]
        });
        
        const scaleValue = showCheckmark ? 1 : 0 
        this.scaleCheckmark(scaleValue)

        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[styles.label, { fontSize, color }]}>{labelText}</Text>
                {
                    inputType === 'password' ?
                        <TouchableOpacity
                            style={styles.showButton}
                            onPress={this.toggleShowPassword}
                        >
                            <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                        : null
                }
                <Animated.View
                    style={[styles.checkmarkWrapper, { transform: [{scale: iconScale}]}]}>
                    <FontAwesome
                        name={'check'}
                        color={'white'}
                        size={20}
                    />
                </Animated.View>
                <TextInput
                    autoCorrect={false}
                    style={[styles.inputField, { color: inputColor, borderBottomColor: borderBottom }]}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                    keyboardType={keyboaredType}
                />
            </View>
        );
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    showCheckmark: PropTypes.bool
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex'
    },
    label: {
        fontWeight: '700',
        marginBottom: 10,
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
    },
    showButton: {
        position: 'absolute',
        right: 0,
    },
    showButtonText: {
        color: colors.white,
        fontWeight: '700'
    },
    checkmarkWrapper: {
        position: 'absolute',
        right: 0,
        bottom: 12
    }
});

export default InputField;
