import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../component/Shoes'
import Footer from '../../component/Footer'

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/banner.jpg')} style={styles.image} />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>▸</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <Icon name='filter' size={20} color='#000' />
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.line} />

            <ScrollView>
                <Text style={styles.textDestq}>LANÇAMENTOS</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.jpeg')} cost="R$ 59,99" onClick={() => navigation.navigate('Detail')}>
                        Tênis Kappa Impact 2
                    </Shoes>

                    <Shoes img={require('../../assets/2.jpeg')} cost="R$ 239,99" onClick={() => navigation.navigate('Detail')}>
                        Tênis Nike Revolution 5
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/3.jpeg')} cost="R$ 329,99" onClick={() => navigation.navigate('Detail')}>
                        Tênis Vans OLD SKOOL
                    </Shoes>

                    <Shoes img={require('../../assets/4.jpeg')} cost="R$ 399,99" onClick={() => navigation.navigate('Detail')}>
                        Tênis Adidas Superstar
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/5.jpeg')} cost="R$ 59,99" onClick={() => navigation.navigate('Detail')}>
                        Tênis Tryon Nikko
                    </Shoes>

                    <Shoes img={require('../../assets/6.jpeg')} cost="R$ 169,99" onClick={() => navigation.navigate('Detail')}>
                        Tênis Nike SB
                    </Shoes>
                </View>

                <View style={styles.line} />
                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%',
        height: 140
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontSize: 20,
        marginHorizontal: '1%',
        fontWeight: 'bold'
    },
    textDestq: {
        fontSize: 20,
        marginHorizontal: '2%',
        fontWeight: 'bold'
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 1.5
    }
})