import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from './MenuItem';
import { AntDesign } from '@expo/vector-icons';

export function Recommendations({ items, mostrarRecomendacoes, setMostrarRecomendacoes }) {
    return (
      <>
        <Text style={styles.titulos}>Recomendações de pratos</Text>
        <TouchableOpacity
          style={styles.buttonMostrar}
          onPress={() => setMostrarRecomendacoes(!mostrarRecomendacoes)}
        >
          <AntDesign style={styles.icons} name="like2" size={20} color="#fff" />
          <Text style={styles.textButtonMostrar}>
            {mostrarRecomendacoes ? 'Ocultar recomendações' : 'Mostrar recomendações'}
          </Text>
        </TouchableOpacity>
        {mostrarRecomendacoes && (
          <View>
            {items
              .filter(
                item =>
                  item.id === 4 ||
                  item.id === 6 ||
                  item.id === 10 ||
                  item.id === 13 ||
                  item.id === 14 ||
                  item.id === 15
              )
              .map(item => <MenuItem item={item} key={item.id} />)}
          </View>
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