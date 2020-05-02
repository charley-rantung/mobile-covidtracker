import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';

export default class Indo extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            refreshing: false
        }


    }

    componentDidMount = () => {
        this.fetchingData()
    }

    fetchingData = () => {
        this.setState({refreshing: true})
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        .then(response => response.json())
        .then(json => this.setState({data: json.data, refreshing: false}))
    }

    onRefresh = () => {
        // this.setState({refreshing: true})
        this.fetchingData()
        // this.setState({refreshing: false})
    }


    render(){

        return(
            <View style={{flex: 1}}>
                <FlatList style={{borderWidth: 2, marginTop: 10}}
                    data={this.state.data}
                    keyExtractor={item => item.fid.toString()}
                    renderItem = {
                        ({item}) => (
                            <View style={{height: 60, flexDirection: 'column', alignItems:'center',justifyContent: 'space-between', borderWidth: 0, borderColor:'black', borderRadius: 10}}>
                                <View>
                                    <Text style={{color: '#5F0008'}}>{item.provinsi}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: '#5F0008', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text style={{color: '#ffffff'}}>{item.kasusPosi}</Text>
                                    </View>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', margin: 5, borderWidth: 2, borderColor: '#1A1A1A'}}>
                                        <Text>{item.kasusSemb}</Text>
                                    </View>
                                    <View style={{height: 25, width: 55, borderRadius: 10, backgroundColor: '#1a1a1a', justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                        <Text style={{color: '#ffffff'}}>{item.kasusMeni}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    
                    refreshing= {this.state.refreshing}
                    onRefresh = {this.fetchingData}
                />
            </View>
        )
    }
}