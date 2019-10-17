import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';

import { RNCamera } from 'react-native-camera';
import { PermissionsAndroid } from 'react-native';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}



export default class Fase01 extends Component {



  render(

  ) {
    return (
      <View style={{ top: 50, width: '50%', height: '50%' }}>

        <View>
          <RNCamera
            style={{ height: '100%' }}
            ref={camera => {
              this.camera = camera;
            }}
            type={RNCamera.Constants.Type.back}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={RNCamera.Constants.FlashMode.off}
          />
        </View>

        <View style={{ position: 'absolute', left: '100%' }}>
          <TouchableOpacity onPress={this.takePicture}>
            <Text> SNAP acessar câmera </Text>
          </TouchableOpacity>
        </View>



      </View>
    )
    // return (
    //   <ScrollView>

    //     <RNCamera
    //       #ref={camera => { this.camera = camera }}
    //       // style={{
    //       //             flex: 1,
    //       //           width: '100%',
    //       //         }}                     nenhum dos styles fez diferença
    //       //style = {styles.preview}
    //       #type={RNCamera.Constants.Type.back}

    //       #autoFocus={RNCamera.Constants.AutoFocus.on}
    //       #flashMode={RNCamera.Constants.FlashMode.off}
    //       androidCameraPermissionOptions={{
    //         title: 'Permission to use camera',
    //         message: 'We need your permission to use your camera',
    //         // buttonPositive: 'Ok',
    //         // buttonNegative: 'Cancel',
    //       }}
    //       status={RNCamera.Constants.CameraStatus.READY} //não fez diferença
    //     //  androidCameraPermissionOptions={'We need your permission to use your camera phone'}


    //     />
    //     <View style={{ backgroundColor: '#A4D6D7', padding: 20 }}>




    //       <View>
    //         <TouchableOpacity onPress={this.takePicture}>
    //           <Text> SNAP acessar câmera </Text>
    //         </TouchableOpacity>
    //       </View>




    //     </View>

    //   </ScrollView>
    // )
  }
}


const styles = StyleSheet.create({
  // preview: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // }
});