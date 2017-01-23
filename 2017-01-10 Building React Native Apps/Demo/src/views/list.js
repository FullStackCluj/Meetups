/**
 * Created by biancafarcas on 1/10/17.
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loadUI: false
        }
    }

    getRepos() {
        fetch('https://api.github.com/search/repositories?q=react-native', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.items) {
                    this.setState({repos: response.items, loadUI: true})
                }
            })
    }

    componentDidMount() {
        this.getRepos();
    }

    navigate(repo) {
        this.props.navigator.push({
            title: 'Profile',
            repo: repo
        })
    }

    render() {

        if (!this.state.loadUI) return (
            <View style={styles.activityIndicatorView}>
                <ActivityIndicator
                    color={'green'}
                    size="large"
                />
            </View>
        );
        return (
            <ScrollView>
                {this.state.repos.map(repo => (
                    <TouchableOpacity key={repo.id}
                                      onPress={this.navigate.bind(this, repo)}
                                      activeOpacity={1}>
                        <View style={styles.repoView}>
                            <Image source={{uri: repo.owner.avatar_url}}
                                   style={styles.avatar}/>
                            <Text style={styles.repoName}>{repo.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    avatar: {
        height: 30,
        width: 30,
    },
    repoView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    repoName: {
        paddingLeft: 5
    },
    activityIndicatorView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});
