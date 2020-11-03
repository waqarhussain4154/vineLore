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
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default class DetailResolveWatchListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
         Id: this.props.route.params.Id,
         SurveyDate: this.props.route.params.SurveyDate,
            ProductName: this.props.route.params.ProductName,
            StoreNo: this.props.route.params.StoreNo,
            DateDelivered: this.props.route.params.DateDelivered,
            DabcNo: this.props.route.params.DabcNo,
            DesignatedToStack: this.props.route.params.DesignatedToStack,
            OnSpa: this.props.route.params.OnSpa,
            CasesInWareHouse: this.props.route.params.CasesInWareHouse,
            CasesInOrder: this.props.route.params.CasesInOrder,
            BottlesOnRacK: this.props.route.params.BottlesOnRacK,
            CasesOnBack: this.props.route.params.CasesOnBack,
            Buffer: this.props.route.params.Buffer,
            Status: this.props.route.params.Status,
            EmailToRequest: this.props.route.params.EmailToRequest,
            Notes: this.props.route.params.Notes,
            RepName: this.props.route.params.RepName,
        };
    }
    componentDidMount(){
        console.log("tid",this.state)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navView}>
                    <TouchableOpacity
                    onPress={() =>  this.props.navigation.goBack()}
                    >
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
                        <Text style={{ fontSize: RFPercentage(3.5), color: 'black', fontWeight: 'bold', }}>{this.state.ProductName}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("EditResolveWatchListItems",{
                        Id : this.state.Id,
                        SurveyDate:  this.state.SurveyDate,
                        ProductName:  this.state.ProductName,
                        StoreNo:  this.state.StoreNo,
                        DateDelivered:  this.state.DateDelivered,
                        DabcNo:  this.state.DabcNo,
                        DesignatedToStack:  this.state.DesignatedToStack,
                        OnSpa:  this.state.OnSpa,
                        CasesInWareHouse:  this.state.CasesInWareHouse,
                        CasesInOrder:  this.state.CasesInOrder,
                        BottlesOnRacK:  this.state.BottlesOnRacK,
                        CasesOnBack:  this.state.CasesOnBack,
                        Buffer:  this.state.Buffer,
                        Status:  this.state.Status,
                        EmailToRequest:  this.state.EmailToRequest,
                        Notes:  this.state.Notes,
                        RepName:  this.state.RepName,
                    })}
                    >
                        <FontAwesome
                            style={{ width: wp(8) }}
                            name='pencil'
                            size={hp(5)}
                            color='#173760'
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ marginBottom: hp(10) }}>
                        <View style={styles.textInputView}>
                            <View>
                            <Text style={styles.label}>Survey Date</Text>
                                <View style={{ height: hp(7), width: wp(100), }}>
                                    <Text style={styles.showText}>
                                    {this.state.SurveyDate}
                                       </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Store No.</Text>
                                <View style={styles.textInputBody}>
                                    <Text style={styles.showText}>
                                        {this.state.StoreNo}
                                       </Text>

                                </View>
                            </View>
                        </View>
                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>DABC No.</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                       {this.state.DabcNo}
                                       </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Product Name</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                       {this.state.ProductName}
                                       </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>On Spa?</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                       {this.state.OnSpa=='Y'?'Yes':this.state.OnSpa=='N'?'No':''}
                                       </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Designated to Stack?</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                {this.state.DesignatedToStack=='Y'?'Yes':this.state.DesignatedToStack=='N'?'No':''}
                                       </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Cases in Warehouse</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                       {this.state.CasesInWareHouse}
                                       </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Cases on Order</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                       {this.state.CasesInWareHouse}
                                       </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Bottles on Rack</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                       {this.state.BottlesOnRacK}
                                       </Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.textInputView}>
                            <View>
                                <Text style={styles.label}>Cases on Back</Text>
                                <View style={styles.textInputBody}>
                                <Text style={styles.showText}>
                                        {this.state.CasesOnBack}
                                       </Text>
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

    label: {
        fontSize: RFPercentage(4),
        color: 'grey',
        marginLeft: wp(1)
    },
    showText: {
        textAlignVertical: 'top', fontSize: RFPercentage(4.5), marginLeft:wp(1),
    }



});  