import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';

export default class Global extends Component {
    constructor(){
        super();
        this.state = {
            data : {}
        }

    }

    componentDidMount(){
        fetch('https://covid19.mathdro.id/api')
        .then(response=> response.json()
        .then(json=>this.setState(data=json)))
    }

    render(){
        return(
            console.log(this.state.data),
            <View style={{height: 50}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.value}
                    renderItem = {
                        ({item}) => (
                            <View>
                                <View>
                                    <Text>Positif</Text>
                                    <Text>{item.confirmed.value}</Text>
                                </View>
                                <View>
                                    <Text>Sembuh</Text>
                                    <Text>{item.recovered.value}</Text>
                                </View>
                                <View>
                                    <Text>Meninggal</Text>
                                    <Text>{item.deaths.value}</Text>
                                </View>
                            </View>
                        )
                    }
                />
            </View>
        )
    }
}