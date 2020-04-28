import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import indo from './komponen/indo';
export default function App() {
  return (
    <View>
      {/* Global */}
      <View>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Global</Text>
        </View>
        <View>
          <View>
            <Text>Positif</Text>
            <Text></Text>
          </View>
          <View>
            <Text>Sembuh</Text>
            <Text></Text>
          </View>
          <View>
            <Text>Meninggal</Text>
            <Text></Text>
          </View>
        </View>
      </View>
      {/* Indonesia */}
      <View>
        {/* Sub-title */}
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Indonesia</Text>
        </View>
        {/* Flatlist */}
        <indo />
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
