import { FlatList, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import { MenuItem } from "./MenuItem";
import { MaterialIcons } from '@expo/vector-icons';


export function Promotions({ items, mostrarPromocoes, setMostrarPromocoes }) {
    return (
        <>
            <Text style={styles.titulos}>Promoções</Text>
            <TouchableOpacity
                style={styles.buttonMostrar}
                onPress={() => setMostrarPromocoes(!mostrarPromocoes)}>
                <MaterialIcons style={styles.icons} name="attach-money" size={23} color="#fff" />
                <Text style={styles.textButtonMostrar}>
                    {mostrarPromocoes ? 'Esconder Promoções' : 'Mostrar Promoções'}
                </Text>
            </TouchableOpacity>
            {mostrarPromocoes && (
                <FlatList
                    numColumns={2}
                    data={items.filter(item => item.preco === 30 || item.preco === 32)}
                    renderItem={({ item }) => <MenuItem item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </>    
    );
}

const styles = StyleSheet.create({
    titulos:{
        color: '#536470',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
    },
    buttonMostrar: {
        marginTop: 7,
        flexDirection: 'row',
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#171f25',
        borderWidth: 2,
        borderColor: '#752e2b',
        padding: 11,
        marginLeft: 30,
        marginRight: 30,
    },
    textButtonMostrar: {
        color: '#fff',
        fontSize: 17,
        alignSelf: 'center'
    },
    icons: {
        marginRight: 10,
    },
})