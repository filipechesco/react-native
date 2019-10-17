import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image, ScrollView, TouchableHighlight } from 'react-native';

export default class Mundos extends Component{
    render(){
        return(
            <ScrollView>
                <View style={{backgroundColor: '#F9FF80'}}>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('FasesSelecao')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 30}}>
                 
                            <Image source={require('./imagens/mundo1.png')}
                             style={{width: 300, height: 300}}/>
                
                </View>
                </TouchableHighlight>
          

             

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Aladdin')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 0}}>
                 
                            <Image source={require('./imagens/mundo2.png')}
                             style={{width: 335, height: 265}}/>
                
                </View>
                </TouchableHighlight>
           


                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Aladdin')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 30}}>
                 
                            <Image source={require('./imagens/mundo3.png')}
                             style={{width: 350, height: 270}}/>
                
                </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Aladdin')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 30}}>
                 
                            <Image source={require('./imagens/mundo4.png')}
                             style={{width: 340, height: 260}}/>
                
                </View>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Aladdin')} underlayColor='transparent'>
                        <View style={{alignItems: 'center', padding: 30}}>
                 
                            <Image source={require('./imagens/mundo5.png')}
                             style={{width: 300, height: 280}}/>
                
                </View>
                </TouchableHighlight>
                
           
                
             
                   
                </View>
                
            </ScrollView>
        )
    }
}
