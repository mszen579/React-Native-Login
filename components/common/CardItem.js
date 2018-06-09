//Card Item
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CardItem = (props) => {
    return (
        <View style={styles.cardItem}>
            { props.children }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    cardItem: {
        padding: 5,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
});

//make this component available to the app
export  {CardItem};
