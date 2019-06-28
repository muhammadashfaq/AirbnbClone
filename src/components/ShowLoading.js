import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, Image,ActivityIndicator } from 'react-native';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';


class ShowLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { animationType, visible } = this.props;
        return (
            <Modal
                visible={visible}
                animationType={animationType}
                transparent >
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                        {/* <Image
                            style={styles.loaderImage}
                            source={require('../assets/images/loader.gif')}
                        /> */}
                        <ActivityIndicator 
                            color={'red'}
                            size='large'
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 2,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    loaderContainer: {
        width: 90,
        height: 90,
        backgroundColor: colors.white,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderImage: {
        width: 90,
        height: 90,
        borderRadius: 15,
    }
});


ShowLoading.propTypes = {
    animationType: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
}
export default ShowLoading;
