import React, {Component} from 'react';
import {
    Platform,
    AppRegistry,
    Text,
    View
  } from 'react-native';
import {Button, Card, CardItem, Input} from './common';

class LoginForm extends Component{
constructor(){
    super();
    this.state={
        username: "",
        password: ""
    };
}


_onloginPressed(){
    console.log(`user name is: ${this.state.username} and Password is ${this.state.passwprd}`)
}


    render(){
        return(
       <Card>
            <CardItem>
                <Input
                label="Email"
                Placeholder="Enter you email"
                secureTextEntry={false}
                onChangeText={(username) => this.setState({username})}
                />
            </CardItem>

              <CardItem>
                <Input
                label="Password"
                Placeholder="Enter you password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                />
            </CardItem>

            <CardItem>
                <Button onPress={this._onloginPressed.bind(this)}>Login</Button>
            </CardItem>
       </Card>
        );
    }
}


export default LoginForm;