/*import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

interface Props {
  hangup:() => void;
  join:() => void;
}

export default function GettingCall() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/IMG_20200914_122207.jpg')} style={styles.image}/>
      <View style={{flexDirection:'row'}}>
      <View style={{paddingHorizontal: 40, marginBottom: 20}}>
        <TouchableOpacity style={{backgroundColor:'green', width: 60, height: 60,borderRadius: 100,alignItems:'center', justifyContent:'center', padding: 10}}>
        <FontAwesome5 name="video" size={25}/>

        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal:40, marginBottom: 20}}>
        <TouchableOpacity style={{backgroundColor:'red', width: 60, height: 60,borderRadius: 100,alignItems:'center', justifyContent:'center', padding: 10}}>
        <FontAwesome5 name="video" size={25}/>

        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    image:{
      position:'absolute',
            height: '100%',
            width: '100%',
            marginTop: 50,
           
    }

});*/

/*import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import Button from './Button';

interface Props {
  hangup:() => void;
  join:() => void;
}

export default function GettingCall(props: Props) {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/IMG_20200914_122207.jpg')} style={styles.image}/>
      <View style={{flexDirection:'row', marginBottom: 30, justifyContent:'space-around'}}>

      <Button 
        iconName="phone"
        backgroundColor="green"
        onPress={props.join}
        style={{marginRight: 30, marginLeft: 30}}
      />

<Button 
        iconName="phone"
        backgroundColor="red"
        onPress={props.hangup}
        style={{marginLeft: 30, marginRight: 30}}
      />

      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    image:{
      position:'absolute',
            height: '100%',
            width: '100%',
            marginTop: 50,
           
    }

});*/

import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import Button from './Button';

const GettingCall = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/IMG_20200914_122207.jpg')} style={styles.image}></Image>
      <View style={styles.bContainer}>
       
        <Button
          iconName="call-end"
          backgroundColor="red"
          onPress={props.hangup}
          style={{marginRight: 30}}
        />
         <Button
          iconName={"phone"}
          backgroundColor="green"
          onPress={props.join}
          style={{marginLeft: 30}}
        />
      </View>
    </View>
  );
};

export default GettingCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bContainer: {
    flexDirection: 'row',
    bottom: 30,
  },
});