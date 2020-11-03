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
    TouchableOpacity,
    TextInput,
    FlatList,
    TouchableWithoutFeedback

} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/EvilIcons';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import firestore from '@react-native-firebase/firestore';

// Dummy Data
let data = ["Loremting ", 'Contrary', 'Lorem t', "Loon", "Thepsum,Themsum", "Loremamet..", "Loremting ", 'Contrary', 'Lorem t', "Loon", "Thepsum,Themsum", "Loremamet.."]
function Item({ item, props }) {
    return (
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('DetailWatchListItems',{
            Id : item.Id,
            SurveyDate: item.SurveyDate,
            ProductName: item.ProductName,
            StoreNo: item.StoreNo,
            DateDelivered: item.DateDelivered,
            DabcNo: item.DabcNo,
            DesignatedToStack: item.DesignatedToStack,
            OnSpa: item.OnSpa,
            CasesInWareHouse: item.CasesInWareHouse,
            CasesInOrder: item.CasesInOrder,
            BottlesOnRacK: item.BottlesOnRacK,
            CasesOnBack: item.CasesOnBack,
            Buffer: item.Buffer,
            Status: item.Status,
            EmailToRequest: item.EmailToRequest,
            Notes: item.Notes,
            RepName: item.RepName,
            })}>
            <View style={{ marginRight: wp(4)}}>
                <View style={{flexDirection:'row',}}>
                    <View style={{width:wp(85)}}>
                    <Text style={{ fontSize: RFPercentage(4), fontWeight: 'bold' }}>{item.SurveyDate}</Text>
                    <Text style={{ fontSize: RFPercentage(4), fontWeight: 'bold', marginTop: hp(1.5) }}>{item.ProductName}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: RFPercentage(3), marginTop: hp(0.5), color: '#7F7F7F' }}>Store #</Text>
                        <Text style={{ fontSize: RFPercentage(3), marginTop: hp(0.5), color: '#7F7F7F' }}>{item.StoreNo}</Text>
                    </View>
                    </View>
                    <View style={{}}>
                    
                    <Ionicons
                        style={{ width: wp(5.5),marginTop:hp(8) }}
                        name='chevron-forward'
                        size={hp(5)}
                        color='#A6A6A6'
                        
                    />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}





export default class ResolveWatchListItems extends Component {
    constructor() {
        super();
        this.state = {
            listitems: [],
            inSearchData:[]
        };
    }
    componentDidMount() {
        this.ListItems()
    }
    searchEmployee = value => {
        const filteredContacts = this.state.inSearchData.filter(employee => {
            let contactLowercase = (
                employee.ProductName
            ).toLowerCase();

            let searchTermLowercase = value.toLowerCase();

            return contactLowercase.indexOf(searchTermLowercase) > -1;
        });
        this.setState({ listitems: filteredContacts });
    };
    ListItems() {
        var li = []
        firestore()
            .collection('WatchList')
            .get()
            .then(querySnapshot => {
                console.log('Total records: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    li.push({
                        Id: documentSnapshot.id,
                        SurveyDate: documentSnapshot.data().SurveyDate,
                        ProductName: documentSnapshot.data().ProductName,
                        StoreNo: documentSnapshot.data().StoreNo,
                        DateDelivered: documentSnapshot.data().DateDelivered,

                       
                        
                        DabcNo:documentSnapshot.data().DabcNo,
                        DesignatedToStack:documentSnapshot.data().DesignatedToStack,
                        OnSpa: documentSnapshot.data().OnSpa,
                        CasesInWareHouse: documentSnapshot.data().CasesInWareHouse,
                        CasesInOrder:documentSnapshot.data().CasesInOrder,
                        BottlesOnRacK:documentSnapshot.data().BottlesOnRacK,
                        CasesOnBack:documentSnapshot.data().CasesOnBack,
                        Buffer: documentSnapshot.data().Buffer,
                        Status: documentSnapshot.data().Status,
                        EmailToRequest: documentSnapshot.data().EmailToRequest,
                        
                        Notes:documentSnapshot.data().Notes,
                        
                       
                        RepName: documentSnapshot.data().RepName,
                    })
                
                        this.setState({ listitems: li })
                        this.setState({ inSearchData: li })
                    
                    
                    console.log("listitems", this.state.listitems)

                });
            });


    }
    renderSeparator = () => (
        <View
            style={{
                marginTop: hp(2),
                marginBottom: hp(2),
                backgroundColor: '#DFDFDF',
                height: 2,
            }}
        />
    );
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navView}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.goBack()}> 
                        <View style={{ flexDirection: 'row', }}>
                            <BackIcon
                                style={{ width: wp(5.5) }}
                                name='arrow-back-ios'
                                size={hp(5)}
                                color='#173760'
                            />
                            <Text style={{ fontSize: RFPercentage(3.5), color: '#173760' }}>Back</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: RFPercentage(3.5), color: 'black', fontWeight: 'bold', }}>Resolve WatchList</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign
                            style={{ width: wp(8) }}
                            name='filter'
                            size={hp(5)}
                            color='#173760'
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: hp(10), justifyContent: "center", alignItems: 'center' }}>
                    <View style={styles.SearchView}>

                        <TextInput
                            style={styles.Search}
                            placeholder={'Search'}
                            placeholderTextColor={'#979797'}
                            underlineColorAndroid='transparent'
                            onChangeText={value => this.searchEmployee(value)}

                        />

                    </View>
                    <View style={styles.FlatList}>
                        <FlatList
                            style={{height:hp(70)}}
                            // contentContainerStyle={{ alignSelf: 'flex-start' }}
                            // vertical={true}
                            // showsVerticalScrollIndicator={false}
                            // showsHorizontalScrollIndicator={false}
                            // numColumns={1}
                            data={this.state.listitems}
                            renderItem={({ item }) => <Item item={item} props={this.props} />}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                    </View>

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: hp(100)


    },
    navView: {
        width: wp(97),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2),


    },
    textInputView: {
        width: wp(95),
        marginTop: hp(4),
        marginLeft: 5


    },
    SearchView: {
        backgroundColor: "#F2F2F2",
        width: wp(95),
        borderRadius: 25, marginTop: hp(2), marginBottom: hp(4)
    },
    Search: {
        fontSize: RFPercentage(4),
        marginLeft: wp(6)
    },
    FlatList: {
        // height: hp(65),
        width: wp(95)
    }

});  