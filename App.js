import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Indo from './komponen/Indo';
import Global from './komponen/Global';
export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={styles.Title}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Data COVID-19 Global & Indonesia</Text>
      </View>
      {/* Global */}
      <View style={{marginTop: 10, flex: 1}}> 
        <View style={styles.subPlace}>
          <Text style={styles.subText}>Global</Text>
        </View>
        <Global/>
      </View>
      {/* Indonesia */}
      <View style={{marginTop: 25, flex: 5}}>
        {/* Sub-title */}
        <View style={styles.subPlace}>
          <Text style={styles.subText}>Indonesia</Text>
        </View>
        {/* Flatlist */}
        <Indo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 24,
    fontWeight: 'normal'
  },
  subPlace: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  Title: {
    flex: 0.5,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
          marginTop: 23,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
   }
});