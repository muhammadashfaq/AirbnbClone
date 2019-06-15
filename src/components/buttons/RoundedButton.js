import React,{ Component } from 'react';
import { Text,TouchableHighlight,View,StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import colors from '../../styles/colors'

class RoundedButton extends Component {

  render() {
      const { text,textColor, background ,icon ,handleOnPress} = this.props
      const backgroundColor = background || 'transparent'
      const color = textColor || colors.black   
    return (
      <View>
        <TouchableHighlight 
        style={[styles.wrapper,{backgroundColor}]}
        onPress={handleOnPress}>
        <View style={styles.buttonTextWrapper}>
            {icon}
            <Text style={[styles.buttonText,{color}]}>{text}</Text>
        </View>
         </TouchableHighlight>
      </View>
    );
  }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: 'center', 
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText:{
        fontSize: 16,
        width: '100%',
        textAlign: 'center'
    }
});

export default RoundedButton;
