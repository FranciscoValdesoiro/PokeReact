import React, { Component } from "react";
import { StyleSheet, ImageBackground,Animated, Dimensions, View, Text, Image, TextInput} from 'react-native';
import Button from 'apsl-react-native-button';
import * as Progress from 'react-native-progress';

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
            loading: false,
            firstPokemon: "Select Pokemon",
            url: 'https://pokeapi.co/api/v2/pokemon/',
            imgPokeball: 'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729',
            imgBaseUrl: 'https://pokeapi.co/api/v2/pokemon-form/',
            imgSelectedPokemon: 'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729'
        }
    }

    componentWillMount(){
        this.animatedValue1 = new Animated.Value(0.5);
        this.animatedValue2 = new Animated.Value(0.5);
        this.myAttackValue1 = new Animated.Value(0.5);
        this.myAttackValue2 = new Animated.Value(0.5);
        this.getPokemon(this.props.navigation.state.params.firstPokemon);
    }

    componentDidMount(){
    }

    setSelectedPokemon(pokemon){
        if(pokemon != "Select Pokemon"){
            this.state.firstPokemon = pokemon;
            this.forceUpdate()
            this.setState({
                firstPokemon: pokemon
            })
            this.getImagePokemon(pokemon);
        }
        else
        {
            this.state.imgSelectedPokemon = this.state.imgPokeball;
        }
    }

    getPokemon(pokemon){
        
        this.setState({loading:true})
        fetch(this.state.imgBaseUrl + pokemon)
        .then(res => res.json())
        .then( res => {
            this.setState({
                imgSelectedPokemon: res.sprites.back_default,
                url: res.next,
                loading: false
            })
        });
        this.forceUpdate()
        if(pokemon != "Select Pokemon"){
            this.setState({
                firstPokemon: pokemon
            })
        }
        else
        {
            this.state.imgSelectedPokemon = this.state.imgPokeball;
        }
    };

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
        this.getImagePokemon();

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


        if(this.state.loading){
            return(
                <Text>Cargando</Text>
            );
        }

        return (

            <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('../assets/backgroundBattle.png')}>

            <View style={styles.container}>

                <View style={{ flexDirection: 'row', backgroundColor: 'red'}}>

                    <View style={{width: WIDTH/2, height: HEIGHT/4, backgroundColor: 'red'}}>

                        <View style={styles.contentInfoPokemon}>
                                    

                                    <View style={styles.infoPokemon}>
                                            <Text>CustomName</Text>
                                            <Text>Lv:11</Text>
                                    </View>

                                    <View style={styles.infoPokemon}>
                                        <Progress.Bar progress={1} width={180}  color='green'/>

                                    </View>

                                    <View style={styles.lifeInfoPokemon}>
                                            <Text>26/26</Text>
                                    </View>





                            </View>

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
                                    source={{uri: this.state.imgSelectedPokemon}}
                            />
                        </View>

                        <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'pink'}}>

                        </View>

                           
                            
                    </View>

                    <View style={{width: WIDTH/2, height: HEIGHT/2, backgroundColor: 'yellow'}}>
                        
                        <View style={{ flexDirection:'column', justifyContent:'center', width: WIDTH/2, height: HEIGHT/4, backgroundColor: 'yellow', alignItems: 'center', }}>
                            

                            <View style={styles.contentInfoPokemon}>
                                    

                                    <View style={styles.infoPokemon}>
                                            <Text>CustomName</Text>
                                            <Text>Lv:11</Text>
                                    </View>

                                    <View style={styles.infoPokemon}>
                                        <Progress.Bar progress={1} width={180}  color='green'/>

                                    </View>

                                    <View style={styles.lifeInfoPokemon}>
                                            <Text>26/26</Text>
                                    </View>





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
    contentInfoPokemon: {
        flex:0.7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
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
    infoPokemon: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: WIDTH / 2,
        paddingHorizontal: 10,

        textAlign: 'center',
        fontSize: 16,
    },
    lifeInfoPokemon: {
        
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: WIDTH / 2,
        height: HEIGHT/ 2,
        textAlign: 'center',
        alignItems: 'center', 
        height: 45,
        fontSize: 16,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
},
  });
  