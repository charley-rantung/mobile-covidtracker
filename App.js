import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Indo from './komponen/Indo';
export default function App() {
  return (
    <View style={{flex:1}}>
      {/* Global */}
      <View style={{flex:1}}>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Global</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex:1, backgroundColor: 'blue', alignItems: 'center', borderRadius:20}}>
            <Text>Positif</Text>
            <Text></Text>
          </View>
          <View style={{flex:1, backgroundColor: 'green', alignItems: 'center', borderRadius:20}}>
            <Text>Sembuh</Text>
            <Text></Text>
          </View>
          <View style={{flex:1, backgroundColor: 'grey', alignItems: 'center', borderRadius:20}}>
            <Text>Meninggal</Text>
            <Text></Text>
          </View>
        </View>
      </View>
      {/* Indonesia */}
      <View style={{flex:1}}>
        {/* Sub-title */}
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Indonesia</Text>
        </View>
        {/* Flatlist */}
        <Indo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
