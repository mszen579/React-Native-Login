import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


const Button = (props) => {
    return(
            <TouchableOpacity  style={styles.button} onPress={props.onPress}>
                <Text style={styles.textStyle}>
                    {props.children}
                </Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 45,
        borderRadius: 5,
        marginHorizontal: 25,
        marginVertical: 25,
        backgroundColor: "rgb(42 ,25 ,68)",
        justifyContent: "center",
        flex: 1 // to fill the whole screen
    },
    textStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export {Button};