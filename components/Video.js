/*import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import {MediaStream} from 'react-native-webrtc'

interface Props {
    hangup:() => void;
    localStream: MediaStream | null;
    remoteStream: MediaStream | null;
}

function ButtonContainer(props: Props){
    return(
    <View style={styles.bContainer}>
        <View>
        <TouchableOpacity style={{backgroundColor:'gray', width: 60, height: 60,borderRadius: 100,alignItems:'center', justifyContent:'center', padding: 10}} onPress={props.hangup}>
        <FontAwesome5 name="video" size={25}/>

        </TouchableOpacity>
      </View>
    </View>)
}

export default function Video() {
  return (
    <ButtonContainer onPress={props.hangup}/>
  )
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
           
    },
    bContainer:{
        flexDirection:'row',
         bottom: 30
    }

});*/

/*import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MediaStream} from 'react-native-webrtc';
import Button from './Button';
import {RTCView} from 'react-native-webrtc';

interface Props {
  hangup: () => void;
  localStream?: MediaStream | null;
  remoteStream?: MediaStream | null;
}

function ButtonContainer(props: Props) {
  return (
    <View style={styles.bContainer}>
      <Button iconName="phone" backgroundColor="red" onPress={props.Props} />
    </View>
  );
}

export default function Video(props: Props) {

    // on call only local video
  if (props.localStream && !props.remoteStream) {
    return (
      <View style={styles}>
        <RTCView streamURL={props.localStream.toURL()} objectFit={'cover'} style={styles.video}/>

        <ButtonContainer onPress={props.hangup} />
      </View>
    );
  }

  // once the call connected local stream on remote stream
  if (props.localStream && props.remoteStream) {
    return (
      <View style={styles}>
        <RTCView streamURL={props.remoteStream.toURL()} objectFit={'cover'} style={styles.video}/>
        <RTCView streamURL={props.localStream.toURL()} objectFit={'cover'} style={styles.localvideo}/>
        <ButtonContainer onPress={props.hangup} />
      </View>
    );
  }
  return <ButtonContainer onPress={props.hangup} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    marginTop: 50,
  },
  bContainer: {
    flexDirection: 'row',
    bottom: 30,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  localvideo:{
      position:'absolute',
      width:100,
      height: 150,
      top: 0,
      left: 20, 
      elevation: 10
  }
});*/

import React, {Component, useRef} from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RTCView } from 'react-native-webrtc';
import Button from './Button';
import { mediaDevices} from 'react-native-webrtc';
import {
  EventOnAddStream,
  MediaStream,
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCSessionDescriptionType,
} from 'react-native-webrtc';



const ButtonContainer = (props) => {
  return (
    <View style={styles.bConainer}>
      <Button iconName={"call-end"} style={{backgroundColor:"red"}}  onPress={props.hangup} />
    </View>
  );
};




 const Video = (props) => {
  
     //on call we will just display the local stream
     if (props.localStream && !props.remoteStream) {
        return(
            <View style={styles.container}>
                <RTCView streamURL={props.localStream.toURL()}
                        objectFit={'cover'}
                        style={styles.video}
                />
                
                <ButtonContainer hangup={props.hangup} />

            </View>
         );
     }
      //once the call is connected we will display
      //local stream on top of remote stream
      if (props.localStream && props.remoteStream) {
        return(
            <View style={styles.container}>
                <RTCView streamURL={props.remoteStream.toURL()}
                        objectFit={'cover'}
                        style={styles.video}
                />
                 <RTCView streamURL={props.localStream.toURL()}
                        objectFit={'cover'}
                        style={styles.videoLocal}
                />
                <ButtonContainer hangup={props.hangup} />
               
            </View>
         );
     }
     return <ButtonContainer onPress={props.hangup} />;
    

 }
 export default Video;
const styles = StyleSheet.create({
    bConainer: {
    flexDirection:'row',
    bottom:30,
    backgroundColor:'red',
    borderRadius: 100
    
  },
  container:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
  },
  video:{
      position:'absolute',
      height:'100%',
      width:'100%',
  },
  videoLocal:{
      position:'absolute',
      width:100,
      height:100,
      top:40,
      left:20,
      elevation:10,
  },
});
