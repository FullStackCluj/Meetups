/**
 * Created by biancafarcas on 1/10/17.
 */

import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native'

module.exports = React.createClass({
    render() {
        return (
            <TouchableOpacity style={styles.button}
                              activeOpacity={1}>
                <Text>Hello</Text>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'gray',
        height: 30,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    }
});
