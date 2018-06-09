import React from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';


const Card = (props) =>{
    return(
            <View style={sytles.card}>
            {props.children}
            </View>
    );
};

const sytles = StyleSheet.create({
    card: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    }
});

export {Card};