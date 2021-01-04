import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={props.onClick}>
                <Text style={styles.textBtn}>COMPRAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '85%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: 15,
        color: '#FFF'
    }
})