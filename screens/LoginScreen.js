import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text, Image, TextInput} from 'react-native';
import Button from 'apsl-react-native-button';


const { width: WIDTH} = Dimensions.get('window')

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Image 
                        style={{width: 250, height: 250, alignContent:'center', marginTop: 100}}
                        source={{uri:'https://vignette.wikia.nocookie.net/inciclopedia/images/3/39/Pokeball.PNG/revision/latest?cb=20131217100606'}}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Username" 
                        keyboardType="email-address"
                        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                        editable = {true}
                        maxLength = {40}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"            
                        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                        editable = {true}
                        maxLength = {40}
                    />
                </View>

                <View>
                    <Button 
                        style={styles.loginButton} title="Login"
                        onPress={() => this.props.navigation.navigate('Selector')}>
                        <Text style={styles.loginText}>Login</Text>
                    </Button>
                    <Button 
                        style={styles.singinButton} title="Singin">
                        <Text style={styles.singinText}>Singin</Text>
                    </Button>
                        
                </View>

            </View>
        );
    }
}
export default LoginScreen;


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'column',
      
    },
    
    input: {
        width: WIDTH / 2,
        textAlign: 'center', 
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        borderWidth: 2,
        fontSize: 16,
        backgroundColor: '#fff',
        marginHorizontal: 25,
        marginVertical: 5,
      },
    loginButton: {
        width: WIDTH / 2,
        textAlign: 'center', 
        height: 45,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 2,
        fontSize: 16,
        backgroundColor: '#cc0808',
        marginHorizontal: 25,
    },
    singinButton: {
        width: WIDTH / 2,
        textAlign: 'center', 
        height: 45,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 2,
        fontSize: 16,
        backgroundColor: '#fff',
        marginHorizontal: 25,
    },
    
    loginText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    singinText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
      }
  
  });
  