/**
 * Created by biancafarcas on 1/10/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    Dimensions,
    Image,
    TouchableHighlight,
    Platform
} from 'react-native';

import List from 'Demo/src/views/list';
import Profile from 'Demo/src/views/profile';

const routes = [{title: 'List', index: 0}, {title: 'Profile', index: 1}];

let {height, width} = Dimensions.get('window');

export default class Demo extends Component {

    renderScene(route, navigator) {

        if (route.title == 'List') return (
            <List navigator={navigator} route={route}/>
        );

        if (route.title == 'Profile')
            return (
                <Profile navigator={navigator} route={route}/>
            );
    }

    render() {

        let NavigationBarRouteMapper = {
            LeftButton: function (route, navigator, index, navState) {
                if (route.index == 0) return (
                    <View>
                    </View>
                );
                return (
                    <TouchableHighlight style={styles.backButton}
                                        onPress={() => navigator.pop()}>
                        <Text
                            style={Platform.OS == 'android' ? styles.backButtonTextAndroid : styles.backButtonTextIOS }>Back</Text>
                    </TouchableHighlight>
                )
            }
            ,
            Title: function (route, navigator, index, navState) {
                return (
                    <Text style={Platform.OS == 'android' ? styles.titleAndroid : styles.titleIOS}>{route.title}</Text>
                )
            },
            RightButton: function (route, navigator, index, navState) {
                return null;
            }
        };

        return (
            <Navigator renderScene={this.renderScene}
                       ref={(ref) => this.navigator = ref}
                       initialRoute={routes[0]}
                       sceneStyle={styles.navigatorSceneStyle}
                       navigationBar={
                           <Navigator.NavigationBar
                               routeMapper={NavigationBarRouteMapper}
                               style={styles.navigationBarStyle}/>
                       }

            />
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
    navigatorSceneStyle: {
        flex: 1,
        paddingTop: height / 11
    },
    navigationBarStyle: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        height: height / 11,
        alignItems: 'center',
    },
    titleIOS: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: height / 40
    },
    titleAndroid: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: height / 25,
        paddingRight: width / 5

    },
    backButton: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    backButtonTextIOS: {
        color: 'white',
        paddingLeft: 10
    },
    backButtonTextAndroid: {
        color: 'white',
        paddingLeft: 10,
        fontSize: height / 25,
        paddingTop: 6
    }
});
