import React,{Component} from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,} from 'react-native';

import {  Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

import TelaInicial from './components/TelaInicial';
import Routes from './components/Routes';
import Orientation from 'react-native-orientation';
import Fase01 from './components/Fases/Fase01';


export default class App extends Component {
  //câmera

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.requestCameraPermission(options)
      alert(data.uri);
    }
  }

  //fim câmera
  
  
  
  // ...

  UNSAFE_componentWillMount() {
    // The getOrientation method is async. It happens sometimes that
    // you need the orientation at the moment the JS runtime starts running on device.
    // `getInitialOrientation` returns directly because its a constant set at the
    // beginning of the JS runtime.

    Orientation.lockToLandscape();
    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      // do something
    } else {
      // do something else
    }
  }

  componentDidMount() {
    // this locks the view to Portrait Mode
    Orientation.lockToLandscape();

    // this locks the view to Landscape Mode
    // Orientation.lockToLandscape();

    // this unlocks any previous locks to all Orientations
    // Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this._orientationDidChange);
  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
      // do something with portrait layout
    }
  }

  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });


    // Remember to remove listener
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  render() {
    // ...

    return (
      // ...
     // <TelaInicial/>
     <Routes/>
    )
  }
}