import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Global extends Component {
    constructor(){
        super();
        this.state = {
            positif: '',
            sembuh: '',
            meninggal: '',
        }

    }

    componentDidMount(){
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => (
            this.setState({positif: json.confirmed.value}),
            this.setState({sembuh: json.recovered.value}),
            this.setState({meninggal: json.deaths.value})
            )
        )
    }

    render(){

        return(
            
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', marginTop: 10}}>
                <View style={[styles.box, {backgroundColor: '#5F0008'}]}>
                    <Text style={[styles.text, {color: '#ffffff'}]}>Positif</Text>
                    <Text style={[styles.text, {color: '#ffffff'}]}>{this.state.positif}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: '#ffffff', borderWidth: 0, borderColor: '#1A1A1A'}]}>
                    <Text style={styles.text}>Sembuh</Text>
                    <Text style={styles.text}>{this.state.sembuh}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: '#1A1A1A'}]}>
                    <Text style={[styles.text, {color: '#ffffff'}]}>Meninggal</Text>
                    <Text style={[styles.text, {color: '#ffffff'}]}>{this.state.meninggal}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        width: 110,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})