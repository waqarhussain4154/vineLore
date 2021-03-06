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
    TextInput
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DatePicker from 'react-native-datepicker';
import firestore from '@react-native-firebase/firestore';



export default class AddItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SurveyDate: '',
            StoreNo: '',
            DabcNo: '',
            DesignatedToStack: '',
            OnSpa: '',
            CasesInWareHouse: '',
            CasesInOrder: '',
            BottlesOnRacK: '',
            CasesOnBack: '',
            Buffer: '',
            Status: '',
            EmailToRequest: '',
            DateDelivered: '',
            Notes: '',

            ProductName: '',
            RepName: '',


            req: '',
            req1: '',
            req2: '',
            pro: ''



        };
    }
    PostFinail() {
        console.log("this.state", this.state)
        this.subscriber = firestore()
            .collection('WatchList')
            .add({
                SurveyDate: this.state.SurveyDate,
                StoreNo: this.state.StoreNo,
                DabcNo: this.state.DabcNo,
                DesignatedToStack: this.state.DesignatedToStack,
                OnSpa: this.state.OnSpa,
                CasesInWareHouse: this.state.CasesInWareHouse,
                CasesInOrder: this.state.CasesInOrder,
                BottlesOnRacK: this.state.BottlesOnRacK,
                CasesOnBack: this.state.CasesOnBack,
                Buffer: this.state.Buffer,
                Status: this.state.Status,
                EmailToRequest: this.state.EmailToRequest,
                DateDelivered: this.state.DateDelivered,
                Notes: this.state.Notes,

                ProductName: this.state.ProductName,
                RepName: 'null',
            })
            .then(() => {
                console.log(this.subscriber);
                this.props.navigation.navigate("MainScreen")
            });
        alert('Submited')
    }
    Post() {

        if (this.state.SurveyDate) {
            if (this.state.ProductName) {
                if (this.state.StoreNo) {

                    if (this.state.DabcNo) {
                        this.PostFinail()
                    }
                    else {
                        this.setState({ req2: "Required" })
                    }
                } else {
                    this.setState({ req1: "Required" })
                }
            }
            else {
                this.setState({ pro: "Required" })
            }
        }
        else {
            this.setState({ req: "Required" })
        }




    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={{ fontSize: RFPercentage(5), color: '#173760' }}>Cancel</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: RFPercentage(3.5), color: 'black', fontWeight: 'bold', marginTop: hp(1) }}>Add Item</Text>

                    <TouchableOpacity onPress={() => this.Post()}>
                        <Text style={{ fontSize: RFPercentage(5), color: '#173760' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ marginBottom: hp(10) }}>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Survey Date</Text>
                                <View style={{ height: hp(7), width: wp(100), }}>
                                    <DatePicker
                                        style={{ width: wp(95), textAlignVertical: 'top', padding: 2, marginLeft: 2, marginRight: 2, borderBottomWidth: 1, fontSize: RFPercentage(4), }}
                                        date={this.state.SurveyDate}
                                        mode="date"
                                        placeholder="Required"
                                        format="YYYY-MM-DD"
                                        minDate="2016-05-01"
                                        maxDate="2050-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: wp(100),
                                                top: 4,
                                                marginLeft: 0,

                                            },
                                            dateInput: {
                                                marginLeft: 0,
                                                borderColor: "#fff",

                                            },
                                            dateText: {
                                                fontSize: RFPercentage(4.5),
                                                marginRight: wp(40),
                                                width: wp(50),


                                            },
                                            placeholderText: {
                                                fontSize: RFPercentage(4.5),

                                                marginRight: wp(20),
                                                color: 'grey',
                                                
                                                width:wp(70)
                                            }


                                            // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => { this.setState({ SurveyDate: date }) }}
                                    />
                                    <Text style={{ marginLeft: wp(2) }}>{this.state.req}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Product Name</Text>
                                <View style={styles.textInputBody}>
                                    <TextInput
                                        //ref={input => { this.TermConditionText = input }}
                                        //defaultValue={"hi"}
                                        style={{ textAlignVertical: 'top', fontSize: RFPercentage(4.5), marginLeft: 2, marginRight: 2, }}
                                        multiline={true}
                                        numberOfLines={1}
                                        returnKeyType='next'
                                        keyboardType='default'
                                        placeholder='Required'
                                        placeholderTextColor="grey"
                                        onChangeText={ProductName => this.setState({ ProductName })}
                                    />
                                    <Icon
                                        style={{ marginTop: hp(1.7), marginLeft: wp(50) }}
                                        name='navicon'
                                        size={hp(8)}
                                        color='grey'
                                    />

                                </View>
                                <Text style={{ marginLeft: wp(2) }}>{this.state.pro}</Text>
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Store No.</Text>
                                <View style={styles.textInputBody}>
                                    <TextInput
                                        //ref={input => { this.TermConditionText = input }}
                                        //defaultValue={"hi"}
                                        style={{ textAlignVertical: 'top', fontSize: RFPercentage(4.5), marginLeft: 2, marginRight: 2, }}
                                        multiline={true}
                                        numberOfLines={1}
                                        returnKeyType='next'
                                        keyboardType='number-pad'
                                        placeholder='Required'
                                        placeholderTextColor="grey"
                                        onChangeText={StoreNo => this.setState({ StoreNo })}
                                    />
                                    <Icon
                                        style={{ marginTop: hp(1.7), marginLeft: wp(50) }}
                                        name='navicon'
                                        size={hp(8)}
                                        color='grey'
                                    />

                                </View>
                                <Text style={{ marginLeft: wp(2) }}>{this.state.req1}</Text>
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>DABC No.</Text>
                                <View style={styles.textInputBody}>
                                    <TextInput
                                        //ref={input => { this.TermConditionText = input }}
                                        //defaultValue={"hi"}
                                        style={{ textAlignVertical: 'top', fontSize: RFPercentage(4.5) }}
                                        multiline={true}
                                        numberOfLines={1}
                                        returnKeyType='next'
                                        keyboardType='numeric'
                                        placeholder='Required'
                                        placeholderTextColor="grey"
                                        onChangeText={DabcNo => this.setState({ DabcNo })}
                                    />
                                    <Icon
                                        style={{ marginTop: hp(1.7), marginLeft: wp(50) }}
                                        name='navicon'
                                        size={hp(8)}
                                        color='grey'
                                    />
                                </View>
                                <Text style={{ marginLeft: wp(2) }}>{this.state.req2}</Text>
                            </View>
                        </View>

                        <View style={styles.YNView}>
                            <View>
                                <Text style={styles.labelbtn}>Designated to stack?</Text>
                                <View style={styles.btn}>
                                    <TouchableOpacity onPress={() => this.setState({ DabcNo: 'Y' })}>
                                        <Text style={styles.YNbtn}>Yes</Text>
                                    </TouchableOpacity>
                                    <View style={{ height: hp(3.5), borderRightWidth: 1, borderRightColor: '#fff', marginTop: hp(1.7) }}></View>
                                    <TouchableOpacity onPress={() => this.setState({ DabcNo: 'N' })}>
                                        <Text style={styles.YNbtn}>No</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.YNView}>
                            <View>
                                <Text style={styles.labelbtn}>On Spa?</Text>
                                <View style={styles.btn}>
                                    <TouchableOpacity onPress={() => this.setState({ OnSpa: 'Y' })}>
                                        <Text style={styles.YNbtn}>Yes</Text>
                                    </TouchableOpacity>
                                    <View style={{ height: hp(3.5), borderRightWidth: 1, borderRightColor: '#fff', marginTop: hp(1.7) }}></View>
                                    <TouchableOpacity onPress={() => this.setState({ OnSpa: 'N' })}>
                                        <Text style={styles.YNbtn}>No</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.lightText}>Cases in Warehouse</Text>
                                <View style={styles.lightInput}>
                                    <TextInput
                                        //ref={input => { this.TermConditionText = input }}
                                        //defaultValue={"hi"}
                                        style={{ textAlignVertical: 'top', fontSize: RFPercentage(3.6), padding: 2 }}
                                        // multiline={true}
                                        numberOfLines={1}
                                        returnKeyType='next'
                                        keyboardType='number-pad'
                                        // placeholder='Required'
                                        placeholderTextColor="grey"
                                        onChangeText={CasesInWareHouse => this.setState({ CasesInWareHouse })}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.lightText}>Cases on Order</Text>
                                <View style={styles.lightInput}>
                                    <TextInput
                                        //ref={input => { this.TermConditionText = input }}
                                        //defaultValue={"hi"}
                                        style={{ textAlignVertical: 'top', fontSize: RFPercentage(3.6), padding: 2 }}
                                        // multiline={true}
                                        numberOfLines={1}
                                        returnKeyType='next'
                                        keyboardType='number-pad'
                                        // placeholder='Required'
                                        placeholderTextColor="grey"
                                        onChangeText={CasesInOrder => this.setState({ CasesInOrder })}
                                    />
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{ height: hp(10), width: wp(100), marginTop: hp(3), paddingBottom: hp(3), borderBottomWidth: 1, borderBottomColor: "grey" }}>
                                <TextInput
                                    //ref={input => { this.TermConditionText = input }}
                                    //defaultValue={"hi"}
                                    style={{ textAlignVertical: 'top', fontSize: RFPercentage(4.5), padding: 2, marginLeft: 2, marginRight: 2, }}
                                    multiline={true}
                                    numberOfLines={1}
                                    returnKeyType='next'
                                    keyboardType='number-pad'
                                    placeholder='Bottles on Rack'
                                    placeholderTextColor="grey"
                                    onChangeText={BottlesOnRacK => this.setState({ BottlesOnRacK })}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ height: hp(10), width: wp(100), marginTop: hp(3), paddingBottom: hp(3), borderBottomWidth: 1, borderBottomColor: "grey" }}>
                                <TextInput
                                    //ref={input => { this.TermConditionText = input }}
                                    //defaultValue={"hi"}
                                    style={{ textAlignVertical: 'top', fontSize: RFPercentage(4.5), padding: 2, marginLeft: 2, marginRight: 2, }}
                                    multiline={true}
                                    numberOfLines={1}
                                    returnKeyType='next'
                                    keyboardType='number-pad'
                                    placeholder='Cases in Back'
                                    placeholderTextColor="grey"
                                    onChangeText={CasesOnBack => this.setState({ CasesOnBack })}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{ height: hp(10), width: wp(100), marginTop: hp(3), paddingBottom: hp(3), borderBottomWidth: 1, borderBottomColor: "grey" }}>
                                <TextInput
                                    //ref={input => { this.TermConditionText = input }}
                                    //defaultValue={"hi"}
                                    style={{ textAlignVertical: 'top', fontSize: RFPercentage(4.5), padding: 2, marginLeft: 2, marginRight: 2, }}
                                    multiline={true}
                                    numberOfLines={1}
                                    returnKeyType='next'
                                    keyboardType='default'
                                    placeholder='Buffer'
                                    placeholderTextColor="grey"
                                    onChangeText={Buffer => this.setState({ Buffer })}
                                />
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Status</Text>
                                <View style={styles.textInputBody}>
                                    <TextInput
                                        //ref={input => { this.TermConditionText = input }}
                                        //defaultValue={"hi"}
                                        style={{fontSize: RFPercentage(4.5),width:wp(80)}}
                                        multiline={true}
                                       // numberOfLines={1}
                                        returnKeyType='next'
                                        keyboardType='default'
                                        // placeholder='Required'
                                        placeholderTextColor="grey"
                                        onChangeText={Status => this.setState({ Status })}
                                    />
                                    <Icon
                                        style={{ marginTop: hp(1.7), marginLeft: wp(0) }}
                                        name='navicon'
                                        size={hp(8)}
                                        color='grey'
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.YNView}>
                            <View>
                                <Text style={styles.labelbtn}>Email to Andrew Requested?</Text>
                                <View style={styles.btn}>
                                    <TouchableOpacity onPress={() => this.setState({ EmailToRequest: 'Y' })}>
                                        <Text style={styles.YNbtn}>Yes</Text>
                                    </TouchableOpacity>
                                    <View style={{ height: hp(3.5), borderRightWidth: 1, borderRightColor: '#fff', marginTop: hp(1.7) }}></View>
                                    <TouchableOpacity onPress={() => this.setState({ EmailToRequest: 'N' })}>
                                        <Text style={styles.YNbtn}>No</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{ height: hp(10), width: wp(100), marginTop: hp(3), paddingBottom: hp(3), }}>
                                <DatePicker
                                    style={{ width: wp(95), textAlignVertical: 'top', padding: 2, marginLeft: 2, marginRight: 2, fontSize: RFPercentage(4), borderBottomWidth: 1, borderBottomColor: 'grey' }}
                                    date={this.state.DateDelivered}
                                    mode="date"
                                    placeholder="Date Delivered"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2050-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: wp(100),
                                            top: 4,
                                            marginLeft: 0,

                                        },
                                        dateInput: {
                                            marginLeft: 0,
                                            borderColor: "#fff",

                                        },
                                        dateText: {
                                            fontSize: RFPercentage(4.5),
                                            marginRight: wp(40),
                                            width: wp(50),


                                        },
                                        placeholderText: {
                                            fontSize: RFPercentage(4.5),
                                            width: wp(60),
                                            marginRight: wp(30),
                                            color: 'grey'
                                        }


                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ DateDelivered: date }) }}
                                />
                            </View>
                        </View>

                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Notes</Text>
                                <View style={styles.textInputBody}>
                                    <TextInput
                                        //ref={input => { this.TermConditionText = input }}
                                        //defaultValue={"hi"}
                                        style={{ textAlignVertical: 'top', fontSize: RFPercentage(4.5),width:wp(78)}}
                                        multiline={true}
                                        numberOfLines={1}
                                        returnKeyType='done'
                                        keyboardType='default'
                                        placeholder='Add New Note...'
                                        placeholderTextColor="grey"
                                        onChangeText={Notes => this.setState({ Notes })}
                                    />
                                    <MaterialCommunityIcons
                                        style={{ marginTop: hp(1.7), }}
                                        name='note'
                                        size={hp(7)}
                                        color='grey'
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
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
    navView: {
        width: wp(95),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    textInputView: {
        width: wp(95),
        marginTop: hp(4),
        marginLeft: 5


    },
    YNView: {
        width: wp(95),
        marginTop: hp(4),
        marginLeft: wp(2.5)


    },
    label: {
        fontSize: RFPercentage(4),
        color: 'grey',
        marginLeft: wp(1)
    },
    labelbtn: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: wp(1),
        width: wp(70)
    },
    textInputBody: {
        height: hp(10), width: wp(95), backgroundColor: '#F8F4F5', marginLeft: 4, flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#173760',
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: hp(3)

    },
    YNbtn: {
        fontSize: RFPercentage(5.5),
        color: '#fff',
        width: RFPercentage(30),

        textAlign: 'center'
    },
    lightText: {
        fontSize: RFPercentage(3.5),
        color: '#A6A6A6',
        fontWeight: '800',
        marginLeft: wp(4)
    },
    lightInput: {
        borderWidth: 2,
        borderColor: '#A6A6A6',
        width: wp(40),
        height: hp(6.5),
        marginTop: hp(3.5),
        marginLeft: wp(3)
    }


});  