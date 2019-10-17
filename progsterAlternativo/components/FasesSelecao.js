import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image, ScrollView, TouchableHighlight } from 'react-native';

export default class FasesSelecao extends Component{
    render(){
        return(
            <ScrollView>
                <View style={{backgroundColor: '#A4D6D7'}}>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Fase01')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 30}}>
                 
                            <Image source={require('./imagens/faseNum1.png')}
                             style={{width: 200, height: 150}}/>
                
                </View>
                </TouchableHighlight>
          

             

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Aladdin')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 0}}>
                 
                            <Image source={require('./imagens/faseNum2.png')}
                             style={{width: 200, height: 150}}/>
                
                </View>
                </TouchableHighlight>
           


                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Aladdin')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 30}}>
                 
                            <Image source={require('./imagens/faseNum3.png')}
                             style={{width: 200, height: 150}}/>
                
                </View>
                </TouchableHighlight>

               
    
                
           
                
             
                   
                </View>
                
            </ScrollView>
        )
    }
}
