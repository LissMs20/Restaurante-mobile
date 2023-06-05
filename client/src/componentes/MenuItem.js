import { StyleSheet, Image, Text, View } from 'react-native'

export function MenuItem({ item }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem}} style={styles.imagem}/>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#090f13',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    preco: {
        fontSize: 16,
        color: 'gray',
    },
    imagem: {
        width: 150,
        height: 150,
        marginBottom: 10,
        resizeMode: 'cover',
    },
})