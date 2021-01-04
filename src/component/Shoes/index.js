import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function shoes(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                style={styles.shoesImg}
            />
            <Text style={styles.shoesText}>
                {props.children}
            </Text>
            <View opacity={0.6}>
                <Text>{props.cost}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg: {
        width: 120,
        height: 120
    },
    shoesText: {
        fontSize: 16
    }
})