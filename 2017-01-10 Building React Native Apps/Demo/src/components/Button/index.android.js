/**
 * Created by biancafarcas on 1/10/17.
 */

import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

module.exports = React.createClass({
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Text>Helo</Text>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
