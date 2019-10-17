import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image } from 'react-native';

export default class TelaInicial extends Component{
    render(){
        return(
            <View>
                <ImageBackground source={require('./imagens/fundoHome3.png')} style={{width: '100%', height: '100%' }} >
             
                    <View style={{ padding: 5,  marginTop: 140 , marginHorizontal:200}}>
                    <Button
                        title="Jogar"

                        onPress={() => this.props.navigation.navigate('Mundos')}
                                            
                    />

                    </View>
                    <View style={{ padding: 5,  marginHorizontal:200}}>
                    <Button
                        title="Loja"

                        onPress={() => this.props.navigation.navigate('Horoscopo')}
                                            
                    />

                    </View>
                    <View style={{ padding: 5 , marginHorizontal:200}}>
                    <Button
                        title="Opções"

                        onPress={() => this.props.navigation.navigate('Horoscopo')}
                                            
                    />

                    </View>
                    <View style={{ padding: 5,   marginHorizontal:200}}>
                    <Button
                        title="Sair"

                        onPress={() => this.props.navigation.navigate('Horoscopo')}
                                            
                    />

                    </View>
                    


                
                </ImageBackground>
                
            </View>
        )
    }
}
