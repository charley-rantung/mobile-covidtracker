import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';

export default class indo extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }


    }

    componentDidMount = () => {
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => this.setState({data: json}))
    }


    render(){

        // const list = this.state.data.map( passingDisini => passingDisini.id)
        return(
            <View>
                <FlatList 
                    data={this.state.data}
                    //data: data yang akan digunakan
                    keyExtractor={item => item.id.toString()}
                    // parameter item akan diisi sesuai dengan props data
                    renderItem={ ({item}) => <Text>item.id</Text>}

                    refreshing={/*Tipe data boolean*/}
                    onRefresh ={/*disini masukan fungsi*/() => {}}
                />
            </View>
        )
    }
}