import React, { Component } from 'react';
import { View, Text ,TouchableHighlight,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors'


class NextArrowButton extends Component {



  render() {
      const { disabled , handleNextButton} = this.props;
      const opacityStyle = disabled ? { backgroundColor: 'rgba(255,255,255,0.2)' } : { backgroundColor: 'rgba(255,255,255,0.6)'}
    return (
      <TouchableHighlight
      style={[styles.button,opacityStyle]}
      onPress={handleNextButton}>
        <FontAwesome 
            name={'angle-right'}
            size={32}
            color={colors.green01}
            style={styles.icon}
        />

      </TouchableHighlight>
    );
  }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    }
});

NextArrowButton.propTypes={

}

export default NextArrowButton;
