import React, { Component } from "react";
import {
    View,
    Text,
    Picker,
    Image,
    Dimensions,
    StyleSheet
} from "react-native";
import Button from 'apsl-react-native-button';

const { width: WIDTH} = Dimensions.get('window')

class SelectorScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            pokemon: [],
            url: 'https://pokeapi.co/api/v2/pokemon/',
            imgPokeball: 'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729',
            imgBaseUrl: 'https://pokeapi.co/api/v2/pokemon-form/',
            selectedPokemons: ['Select Pokemon','Select Pokemon','Select Pokemon','Select Pokemon','Select Pokemon','Select Pokemon'],
            pokeName: "",
            pokeAttack1: "",
            pokeAttack2: "",
            pokeAttack3: "",
            pokeAttack4: "",
            pokeImage1: "",
            pokeImageBack1: "",

            imgSelectedPokemons: 
            [
                'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729',
                'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729',
                'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729',
                'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729',
                'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729',
                'https://vignette.wikia.nocookie.net/bonkio/images/a/ab/Skin_-_Pokeball.png/revision/latest?cb=20180114194729'
            ]
        }

    }

    componentDidMount(){
        this.getPokemon();
    }

    getPokemon = () => {
        this.setState({loading:true})

        fetch(this.state.url)
        .then(res => res.json())
        .then( res => {
            this.setState({
                pokemon: res.results,
                url: res.next,
                loading: false
            })
        });
    };

    setDataFirstSelectedPokemon = (pokemon, index) => {
        //this.setState({loading:true})

        fetch(url + pokemon)
        .then(res => res.json())
        .then( res => {
            this.forceUpdate()
            this.setState({
                pokeName: res.forms.name, 
                pokeImageFront1: res.sprites.front_default,
                pokeImageBack1: res.sprites.back_default,
                //loading: false
            })
        });
    };

    getImagePokemon = (pokemon, index) => {
        //this.setState({loading:true})

        fetch(this.state.imgBaseUrl + pokemon)
        .then(res => res.json())
        .then( res => {
            this.state.imgSelectedPokemons[index] = res.sprites.front_default;
            let imgs = this.state.imgSelectedPokemons;
            this.forceUpdate()
            this.setState({
                imgSelectedPokemons: imgs
                //loading: false
            })
        });
    };

    setSelectedPokemon(pokemon, index){
        if(pokemon != "Select Pokemon"){
            this.state.selectedPokemons[index] = pokemon;
            let pok = this.state.selectedPokemons;
            this.forceUpdate()
            this.setState({
                selectedPokemons: pok
            })
            this.getImagePokemon(pokemon, index);
        }
        else
        {
            this.state.imgSelectedPokemons[index] = this.state.imgPokeball;
            this.state.selectedPokemons[index] = pokemon;
            //this.setState({loading:false})
        }
    }

    render() {
        let serviceItems = this.state.pokemon.map( (s, i) => {
            return <Picker.Item key={i} value={s.name} label={s.name} />
        });
        let imgPokemons = this.state.pokemon.map( (s, i) => {
            return <Picker.Item key={i} value={s.name} label={s.name} />
        });

        
        if(this.state.loading){
            return(
                <Text>Cargando</Text>
            );
        }

        return (
            <View style={styles.container}>
                
                <View style={styles.pickerItem}>
                    <View style={styles.imageCircleContainer}>
                        <Image 
                            style={{
                                width: 75, height: 75}}
                            source={{uri: this.state.imgSelectedPokemons[0] }}
                        />
                    </View>

                    <View style={styles.pickerCircleContainer}>
                        <Picker
                            mode="dropdown" 
                            selectedValue={this.state.selectedPokemons[0]}
                            style={{ width: 200, height: 50}}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedPokemon(itemValue, 0)}>
                            <Picker.Item value="Select Pokemon" label="Select Pokemon" />
                            {serviceItems}
                        </Picker>
                    </View>
                </View>

                <View style={styles.pickerItem}>
                    <View style={styles.imageCircleContainer}>
                        <Image 
                            style={{
                                width: 75, height: 75}}
                            source={{uri: this.state.imgSelectedPokemons[1]}}
                        />
                    </View>

                    <View style={styles.pickerCircleContainer}>
                        <Picker
                            mode="dropdown" 
                            selectedValue={this.state.selectedPokemons[1]}
                            style={{ width: 200, height: 50}}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedPokemon(itemValue, 1)}>
                            <Picker.Item value="Select Pokemon" label="Select Pokemon" />
                            {serviceItems}
                        </Picker>
                    </View>
                </View>

                <View style={styles.pickerItem}>
                    <View style={styles.imageCircleContainer}>
                        <Image 
                            style={{
                                width: 75, height: 75}}
                            source={{uri: this.state.imgSelectedPokemons[2]}}
                        />
                    </View>

                    <View style={styles.pickerCircleContainer}>
                        <Picker
                            mode="dropdown" 
                            selectedValue={this.state.selectedPokemons[2]}
                            style={{ width: 200, height: 50}}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedPokemon(itemValue, 2)}>
                            <Picker.Item value="Select Pokemon" label="Select Pokemon" />
                            {serviceItems}
                        </Picker>
                    </View>
                </View>

                <View style={styles.pickerItem}>
                    <View style={styles.imageCircleContainer}>
                        <Image 
                            style={{
                                width: 75, height: 75}}
                            source={{uri: this.state.imgSelectedPokemons[3]}}
                        />
                    </View>

                    <View style={styles.pickerCircleContainer}>
                        <Picker
                            mode="dropdown" 
                            selectedValue={this.state.selectedPokemons[3]}
                            style={{ width: 200, height: 50}}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedPokemon(itemValue, 3)}>
                            <Picker.Item value="Select Pokemon" label="Select Pokemon" />
                            {serviceItems}
                        </Picker>
                    </View>
                </View>

                <View style={styles.pickerItem}>
                    <View style={styles.imageCircleContainer}>
                        <Image 
                            style={{
                                width: 75, height: 75}}
                            source={{uri: this.state.imgSelectedPokemons[4]}}
                        />
                    </View>

                    <View style={styles.pickerCircleContainer}>
                        <Picker
                            mode="dropdown" 
                            selectedValue={this.state.selectedPokemons[4]}
                            style={{ width: 200, height: 50}}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedPokemon(itemValue, 4)}>
                            <Picker.Item value="Select Pokemon" label="Select Pokemon" />
                            {serviceItems}
                        </Picker>
                    </View>
                </View>

                <View style={styles.pickerItem}>
                    <View style={styles.imageCircleContainer}>
                        <Image 
                            style={{
                                width: 75, height: 75}}
                            source={{uri: this.state.imgSelectedPokemons[5]}}
                        />
                    </View>

                    <View style={styles.pickerCircleContainer}>
                        <Picker
                            mode="dropdown" 
                            selectedValue={this.state.selectedPokemons[5]}
                            style={{ width: 200, height: 50}}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedPokemon(itemValue, 5)}>
                            <Picker.Item value="Select Pokemon" label="Select Pokemon" />
                            {serviceItems}
                        </Picker>
                    </View>
                </View>

                <View>
                    <Button style={styles.loginButton} onPress={() => this.props.navigation.navigate('Battle', {
                            firstPokemon: this.state.selectedPokemons[0],
                            firstPokeName: this.state.pokeName,
                            firstPokeImageFront: this.state.pokeImageFront1,
                            firstPokeImageBack: this.state.pokeImageBack1,                            
                            })}>
                        <Text style={styles.loginText}>Confirm Pokemons</Text>
                    </Button>
                    <Button style={styles.cancelButton} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
export default SelectorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffadad'
    },
    pickerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        width: WIDTH / 2,
        textAlign: 'center', 
        height: 45,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 3,
        fontSize: 16,
        backgroundColor: '#cc0808',
        marginHorizontal: 25,
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
        marginHorizontal: 25,
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
});