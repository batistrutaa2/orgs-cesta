import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import topoImage from '../../assets/topo.png';
import imageDescription from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image style={estilos.topo} source={topoImage} />
        <Text style={estilos.TextImage}>Detalhes da cesta</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image style={estilos.imageFazenda} source={imageDescription} />
                <Text style={estilos.nomeFazenda}>jenny jack farm</Text>
            </View>
            <Text style={estilos.descricao}>Uma  cesta com produtos selecionados cuidadosamente direto da fazenda para a cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>

}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    TextImage: {
        width: "100%",
        marginTop: "12%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        fontFamily: "MontserratBold",
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },

    imageFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRebular",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});