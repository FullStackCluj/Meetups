/**
 * Created by biancafarcas on 1/10/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';
import Button from 'Demo/src/components/Button';

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            repo: props.route.repo
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.state.repo.owner.avatar_url}}
                       style={styles.avatar}/>
                <Text style={styles.repoName}>{this.state.repo.name}</Text>
                <Button />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    avatar: {
        height: 60,
        width: 60,
    },
    repoNameIOS: {
        color: 'white'
    },

    repoNameAndroid: {
        color: 'black'
    }
});
