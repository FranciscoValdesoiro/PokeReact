import React, { Component } from "react";
import { StyleSheet, ImageBackground,Animated , Dimensions, View, Text, Image, TextInput} from 'react-native';
import Button from 'apsl-react-native-button';


const { width: WIDTH} = Dimensions.get('window')
const { height: HEIGHT} = Dimensions.get('window')

class BattleScreen extends Component {

    static navigationOptions = {
        header: null
    }


    
    attack(){

    }

    render() {

        return (

            <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('../assets/backgroundBattle.png')}>

            <View style={styles.container}>

                <View style={{ flexDirection: 'row', backgroundColor: 'red'}}>

                    <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'red'}}>

                    </View>

                    <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'blue'}}>

                        <Image 
                                style={{
                                    width: WIDTH/2, height: HEIGHT/4}}
                                source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}}
                            />

                    </View>

                </View>


                <View style={{ flexDirection: 'row', backgroundColor: 'yellow'}}>
 
                    <View style={{ flexDirection: 'column', width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'green'}}>

                        <View style={{width: WIDTH/2, height: HEIGHT/4, backgroundColor: 'gray'}}>
                            <Image 
                                style={{
                                    width: WIDTH/2, height: HEIGHT/4}}
                                    source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png'}}
                            />
                        </View>

                        <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'pink'}}>

                        </View>

                           
                            
                    </View>

                    <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'yellow'}}>
                        
                        <View style={{ width: WIDTH/2, height: HEIGHT/4, backgroundColor: 'yellow', alignItems: 'center', flexDirection: 'row'}}>
                            
                            <View style={styles.infoPokemon}>

                            </View>
                                
                        </View>

                        <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'purple'}}>

                            <View>
                               
                                <Button style={styles.cancelButton} onPress={() => this.startAnimation}>
                                    <Text style={styles.cancelText}>Attack 1</Text>
                                </Button>
                              
                                <Button style={styles.cancelButton} onPress={() => this.props.navigation.goBack()}>
                                    <Text style={styles.cancelText}>Attack 2</Text>
                                </Button>

                                <Button style={styles.cancelButton} onPress={() => this.props.navigation.goBack()}>
                                    <Text style={styles.cancelText}>Attack 3</Text>
                                </Button>

                                <Button style={styles.cancelButton} onPress={() => this.props.navigation.goBack()}>
                                    <Text style={styles.cancelText}>Attack 4</Text>
                                </Button>
                            </View>

                        </View>

                    </View>

                </View>

            </View>

            </ImageBackground>
        );
    }
}
export default BattleScreen;


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      
    },
    cancelButton: {
        width: WIDTH / 2,
        textAlign: 'center', 
        height: 45,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 3,
        fontSize: 16,
        backgroundColor: 'white',
    },
    imageCircleContainer:{
        borderRadius: 100,
        fontSize: 16,
        borderWidth: 3,
        fontSize: 16,
        backgroundColor:'white',
    },
    pickerCircleContainer:{
        borderRadius: 100,
        fontSize: 16,
        borderWidth: 3,
        fontSize: 16,
        backgroundColor:'white',
        paddingHorizontal: 25,
        marginHorizontal:10,
    },
    loginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    cancelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    infoPokemon: {

        width: WIDTH / 2,
        height: HEIGHT/ 2,
        textAlign: 'center',
        alignItems: 'center', 
        height: 45,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 3,
        fontSize: 16,
        backgroundColor: 'white',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
},
  });
  