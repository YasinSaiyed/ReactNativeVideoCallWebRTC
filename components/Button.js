/*import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

interface Props {
    onPress?: any;
    iconName:string;
    backgroundColor:string;
    style?: any;
}

export default function Button(props: Props) {
  return (
    <View>
       <TouchableOpacity onPress={props.onPress}
       style={[
           {backgroundColor: props.backgroundColor},
           props.style,
           styles.button,
       ]}>
        <Icon name={props.iconName} size={25} color="white"/>

        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
width: 60,height: 60, padding: 10, elevation: 10, justifyContent:'center',borderRadius:100, alignItems:'center'
    }
})*/

/*

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 3, 31);
    }
  }
}
*/

import React, {Component} from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';


const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
       backgroundColor= {props.backgroundColor}
        style={[ props.style, styles.button , {backgroundColor: props.backgroundColor}]}>
        <Icon name={props.iconName} color={'#fff'} size={30}  />
        
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    padding: 10,
    evalution: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    
  },
});