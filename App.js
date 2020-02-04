import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
        <TextInput placeholder="Course goal" style={{width:'80%', borderColor:'gray', borderWidth:1, padding:10}}/>
        <Button title="ADD"/>
      </View>
      <View>

      </View>
      <View>

      </View>
    </View>
  );
}
