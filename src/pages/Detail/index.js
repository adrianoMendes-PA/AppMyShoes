import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';
import SizeShoes from '../../component/SizeShoes'
import Button from '../../component/Button'
import Footer from '../../component/Footer'

export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Tênis Kappa Impact 2'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/promo1.jpg')}
                style={styles.image}
                resizeMode='cover'
            />

            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 22 }]}>R$ 59,99</Text>
                </View>
                <View opacity={0.7}>
                    <Text style={[styles.title, { fontSize: 26 }]}>Tênis Kappa Impact 2</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#2379f4" />
                    <Dot color="#fb6e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeShoes bgColor="#17181a" color="#FFF">40</SizeShoes>
                        <SizeShoes>39</SizeShoes>
                        <SizeShoes>38</SizeShoes>
                        <SizeShoes>37</SizeShoes>
                    </ScrollView>
                </View>

                <View style={styles.texContent}>
                    <Text style={styles.texTitle}>
                        Tênis Kappa Impact 2
                    </Text>
                    <Text style={styles.texContent}>
                        Com o Tênis Masculino Kappa Impact 2 você mantém sua rotina de exercícios em dia com conforto e versatilidade. Esse tênis esportivo é feito em mesh respirável que oferece ventilação, e a entressola conta com uma partícula aplicada em ponto estratégico, para oferecer melhor amortecimento a cada passada. O Tênis da Kappa é um calçado ideal para o dia a dia, academia e corridas leves. Garanta o seu!
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Caminhada
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Têxtil e Sintético
                    </Text>
                </View>

                <Button onClick={() => alert('Ainda estamos trabalhando nessa função :)')} />

                <View style={styles.line} />

                <Footer />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%'
    },
    title: {
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '5%'
    },
    texContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    texTitle: {
        fontSize: 25,
        lineHeight: 50
    },
    textList: {
        fontSize: 16,
        lineHeight: 25
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#ddd',
        marginVertical: '2%'
    }
})