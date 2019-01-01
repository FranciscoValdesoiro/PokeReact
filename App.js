import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './screens/LoginScreen';
import SelectorScreen from './screens/SelectorScreen';
import BattleScreen from './screens/BattleScreen';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Selector: SelectorScreen,
    Battle: BattleScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);