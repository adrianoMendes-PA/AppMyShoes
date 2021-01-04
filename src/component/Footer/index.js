import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes'

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/2.jpeg')} cost="239,99">
                            Tênis Nike Revolution 5
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/3.jpeg')} cost="329,99">
                            Tênis Vans OLD SKOOL
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/4.jpeg')} cost="399,99">
                            Tênis Adidas Superstar
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/5.jpeg')} cost="59,99">
                            Tênis Tryon Nikko
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        margin: '2%',
        paddingVertical: '2%',
        fontWeight: 'bold'
    }
})