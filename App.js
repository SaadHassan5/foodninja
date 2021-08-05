
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Image, TextInput
} from 'react-native';
// import { Image } from '@react-native-elements';

const App = () => {
  return (
    
    <View style={{flex:1,borderWidth:5,borderColor:'orange'}}>
    <Image
      source={require('./Images/Maarcha.png')}
      style={{ width: 100, height: 40, left: 10, top: 10, position: 'absolute' }}
      resizeMode={'stretch'}
    />
    <View style={{flex:1}}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <TextInput placeholder={'Search a Item'} style={{width:'60%',height:'5%',borderWidth:2,borderColor:'black',left:150,top:10,borderRadius:12,fontStyle:'italic'}}/>
    </ScrollView>
    </View>
    </View>
  )
}
export default App;
