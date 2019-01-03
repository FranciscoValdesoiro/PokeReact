import React, { Component } from "react";
import { StyleSheet, ImageBackground,Animated, Dimensions, View, Text, Image, TextInput} from 'react-native';
import Button from 'apsl-react-native-button';


const { width: WIDTH} = Dimensions.get('window')
const { height: HEIGHT} = Dimensions.get('window')

class BattleScreen extends Component {

    constructor(props){
        super(props);

        this.myAttack = this.myAttack.bind(this);
        this.enemyAttack = this.enemyAttack.bind(this);
        this.begin = this.begin.bind(this);
        this.hitEnemy = this.hitEnemy.bind(this);

        this.state = {
            animated: new Animated.Value(0.5),
            loading: false
        }
    }

    componentWillMount(){
        this.animatedValue1 = new Animated.Value(0.5);
        this.animatedValue2 = new Animated.Value(0.5);
        this.myAttackValue1 = new Animated.Value(0.5);
        this.myAttackValue2 = new Animated.Value(0.5);
    }

    componentDidMount(){
        
    }

    hitEnemy(){
        Animated.sequence(
            [
            Animated.timing(this.animatedValue1,{
                toValue:0.5,
                duration:100,
            }),
            Animated.timing(this.animatedValue1,{
                toValue:0.5,
                duration:1000,
            }),
             Animated.timing(this.animatedValue1,{
                 toValue:0.4,
                 duration:50,
             }),
             Animated.timing(this.animatedValue1,{
                 toValue:0.6,
                 duration:50,
             }),
             Animated.timing(this.animatedValue1,{
                 toValue:0.5,
                 duration:50,
             })
            ]
         ).start();              
    }

    enemyAttack(){
        
        Animated.parallel([
            Animated.sequence(
                [
                 Animated.timing(this.animatedValue1,{
                     toValue:0,
                     duration:500,
                 }),
                 Animated.timing(this.animatedValue1,{
                     toValue:1,
                     duration:100,
                 }),
                 Animated.timing(this.animatedValue1,{
                     toValue:0.5,
                     duration:700,
                 })
                ]
             ),
             Animated.sequence(
                [
                 Animated.timing(this.animatedValue2,{
                     toValue:1,
                     duration:500,
                 }),
                 Animated.timing(this.animatedValue2,{
                     toValue:0,
                     duration:100,
                 }),
                 Animated.timing(this.animatedValue2,{
                     toValue:0.5,
                     duration:700,
                 })
                ]
             )
        ]).start();
    }

    myAttack(){
        
        Animated.parallel([
            Animated.sequence(
                [
                 Animated.timing(this.myAttackValue1,{
                     toValue:0,
                     duration:500,
                 }),
                 Animated.timing(this.myAttackValue1,{
                     toValue:1,
                     duration:100,
                 }),
                 Animated.timing(this.myAttackValue1,{
                     toValue:0.5,
                     duration:700,
                 })
                ]
             ),
             Animated.sequence(
                [
                 Animated.timing(this.myAttackValue2,{
                     toValue:1,
                     duration:500,
                 }),
                 Animated.timing(this.myAttackValue2,{
                     toValue:0,
                     duration:100,
                 }),
                 Animated.timing(this.myAttackValue2,{
                     toValue:0.5,
                     duration:700,
                 })
                ]
             )
        ]).start();
        this.hitEnemy();
    }

    begin(){
        
        /*
        Alert.alert(
            'Alert Title',
            String(this.state.loading),
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )*/

        if(this.state.loading){
            Animated.timing(this.state.animated,{
                toValue:0,
                duration:1000,
            }).start();
            this.setState({loading:false})
            
        }
        else{
            Animated.timing(this.state.animated,{
                toValue:1,
                duration:1000,
            }).start();
            this.setState({loading:true})
        }

    }

    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        
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

                        <Animated.Image
                                style={{
                                    width: WIDTH/2, height: HEIGHT/4,
                                    transform:
                                    [
                                        {
                                            translateX: this.animatedValue1.interpolate({
                                                inputRange:[0,1],
                                                outputRange:[70,-70]
                                            })
                                        },
                                        {
                                            translateY: this.animatedValue2.interpolate({
                                                inputRange:[0,1],
                                                outputRange:[70,-70]
                                            })
                                        },

                                    ]}}
                                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                            />

                    </View>

                </View>


                <View style={{ flexDirection: 'row', backgroundColor: 'yellow'}}>
 
                    <View style={{ flexDirection: 'column', width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'green'}}>

                        <View style={{width: WIDTH/2, height: HEIGHT/4, backgroundColor: 'gray'}}>
                            <Animated.Image
                                style={{
                                    width: WIDTH/2, height: HEIGHT/4,
                                    transform:[
                                        {
                                            translateX: this.myAttackValue1.interpolate({
                                                inputRange:[0,1],
                                                outputRange:[-70,70]
                                            })
                                        },
                                        {
                                            translateY: this.myAttackValue2.interpolate({
                                                inputRange:[0,1],
                                                outputRange:[-70,70]
                                            })
                                        },
                                    ]}}
                                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                            />
                        </View>

                        <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'pink'}}>

                        </View>

                           
                            
                    </View>

                    <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'yellow'}}>
                        
                        <View style={{ width: WIDTH/2, height: HEIGHT/4, backgroundColor: 'yellow', alignItems: 'center', }}>
                            
                            <View style={styles.infoPokemon}>

                            </View>
                                
                        </View>

                        <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'purple'}}>

                            <View>
                               
                                <Button style={styles.cancelButton} onPress={this.begin}>
                                    <Text style={styles.cancelText}> 1</Text>
                                </Button>
                              
                                <Button style={styles.cancelButton} onPress={this.myAttack}>
                                    <Text style={styles.cancelText}> 2</Text>
                                </Button>

                                <Button style={styles.cancelButton} onPress={this.enemyAttack}>
                                    <Text style={styles.cancelText}> 3</Text>
                                </Button>

                                <Button style={styles.cancelButton} onPress={() => this.props.navigation.goBack()}>
                                    <Text style={styles.cancelText}> 4</Text>
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
  