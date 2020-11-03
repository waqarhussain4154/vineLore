/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/EvilIcons';



export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navView}>
        <Icon
                                        style={{}}
                                        name='navicon'
                                        size={hp(8)}
                                        color='#173760'
                                    />
        </View>
        <View>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/logo.png')} />
        </View>
        <View style={styles.headingWatchlistView}>
          <Text style={styles.headingWatchlist}>WatchList</Text>
          <Text style={styles.vineLora}>Vine Lore Wine and Spirits</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
          onPress={() =>this.props.navigation.navigate('AddItems')}
           >
            <Text style={styles.buttonText}>
              Add Item
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>this.props.navigation.navigate('ResolveWatchListItems')}
           >
            <Text style={styles.buttonText}>
              Resolve WatchList Items
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>this.props.navigation.navigate('WatchList')}
           >
            <Text style={styles.buttonText}>
              WatchList
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navView:{
    width:wp(100)
  },
  tinyLogo: {
    width: wp(90),
    height: hp(10),
    resizeMode: 'stretch',
    marginTop:hp(10)
  },
  headingWatchlistView: {
    width: wp(100),
    alignItems: 'center',
    margin:'10%'
  },
  headingWatchlist: {
    fontSize: RFPercentage(8),
    fontWeight: "bold"
  },
  vineLora: {
    fontSize: RFPercentage(4.5),
    fontWeight:'100',
    color:'grey'
  },
  buttonContainer: {
    width: wp(100),
    alignItems: 'center',
    margin:10

  },
  buttonText: {
    color: '#fff',
    fontSize: RFPercentage(3),
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#173760',
    width: wp(90),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  }
});  