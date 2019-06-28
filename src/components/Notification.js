import React, { Component } from 'react';
import {
  View, Text,
  TouchableOpacity, StyleSheet,
  Easing,
  Animated
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';

class Notification extends Component {


  state = {
    positionValue: new Animated.Value(-60)
  }

  animatedNotification = (value) => {
    const { positionValue } = this.state
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 300,
        velocity: 3,
        tention: 2,
        friction: 8,
        easing: Easing.easeOutBack
      }
    ).start()

  }

  closeNotification = () => {
    this.props.handleCloseNotification()
  }

  render() {
    const { type, firstLine, secondLine, showNotification } = this.props;
    showNotification ? this.animatedNotification(0) : this.animatedNotification(-60)
    const { positionValue } = this.state
    return (
      <Animated.View style={[styles.wrapper, { marginBottom: positionValue}]}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorTextMessage}>{firstLine}</Text>

        </View>
        <Text style={styles.errorTextMessage}>{secondLine}</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.closeNotification}>
          <FontAwesome
            name={'times'}
            size={20}
            color={colors.lightGrey}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func,
  background: PropTypes.string
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: 60,
    
    padding: 10,
  },
  notificationContent: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  errorTextMessage: {
    marginBottom: 2,
    fontSize: 14
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10
  }
});

export default Notification;
