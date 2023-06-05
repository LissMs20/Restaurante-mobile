import { Button, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export function HoursAndReservations({ mostrarHorarios, mostrarNum, setMostrarHorarios, setMostrarNum }) {
    return (
      <View style={styles.line}>
        <View style={styles.cont}>
          <View>
            <View style={styles.box}>
              <AntDesign name="clockcircleo" size={42} color="#f2eab7" />
              <Text style={styles.text2}>Horários</Text>
            </View>
            <View style={styles.containerButton}>
              <Button
                title={mostrarHorarios ? 'Ocultar horários' : 'Ver Horários'}
                onPress={() => setMostrarHorarios(!mostrarHorarios)}
              />
            </View>
          </View>
  
          <View style={styles.reservas}>
            <View style={styles.box}>
              <AntDesign name="phone" size={42} color="#f2eab7" />
              <Text style={styles.text2}>Reservar</Text>
            </View>
            <View style={styles.containerButton}>
              <Button
                title={mostrarNum ? 'Ocultar número' : 'Ver Número'}
                onPress={() => setMostrarNum(!mostrarNum)}
              />
            </View>
          </View>
        </View>
  
        {mostrarHorarios && (
          <View>
            <Text style={styles.textos}>Terças a Domingos 10:00-23:00</Text>
          </View>
        )}
  
        {mostrarNum && (
          <View>
            <Text style={styles.textos}>Telefone: 00 00000-0000</Text>
          </View>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    textos: {
        color: 'white',
        fontSize: 20,
        margin: 10,
        alignSelf: 'center'
    },
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    text2: {
        marginTop: 5,
        color: '#f2eab7',
        fontSize: 20
    },
    box: {
        backgroundColor: '#090f13',
        padding: 25,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 15,
        marginTop: 15
    },
  })