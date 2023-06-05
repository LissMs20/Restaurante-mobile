import { FlatList, StyleSheet, Text, TouchableOpacity, } from "react-native";
import { MenuItem } from "./MenuItem";
import { Ionicons } from '@expo/vector-icons';

export function MenuList({ title, items, mostrarLista, alternarLista }) {
    return (
        <>
            <Text style={styles.titulos}>{title}</Text>
            <TouchableOpacity
                style={styles.buttonMostrar}
                onPress={alternarLista}>
                <Ionicons style={styles.icons} name="restaurant-outline" size={20} color="#fff" />
                <Text style={styles.textButtonMostrar}>
                {mostrarLista ? 'Esconder cardápio' : 'Mostrar cardápio'}
                </Text>
            </TouchableOpacity>
            {mostrarLista && (
                <FlatList
                    numColumns={2}
                    data={items}
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
        marginTop: 15,
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