import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    AppRegistry,
    Text,
    View
  } from 'react-native';
import Button from './common/Button';

class Home extends Component{
constructor(){
    super();
    this.state={
        title:"TODO APP React Native"
    };
}

_onLoginPressed(){
    this.props.navigation.navigate("Login");//Login has to be identical to the name in the RootNavigator.js
}

    render(){
        return(
        <View >  
             <Button onPress={this._onLoginPressed.bind(this)}>Login</Button>
       </View>   
        );
    }
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "lightgray",
      height: 80,
      alignItems: "center", //horizentally centralized
      justifyContent: "center" //vertically centralized
    },
    text:{
        fontSize: 15,
        fontWeight: "bold" 
    }
})
export default Home;