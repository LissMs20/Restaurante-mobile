import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { HoursAndReservations } from '../componentes/HoursAndReservations';

export function InformationsScreen (props) {

    const [mostrarHorarios, setMostrarHorarios] = useState(false)
    const [mostrarNum, setMostrarNum]  = useState (false)

    return (
    <View style={styles.container}>
        <HoursAndReservations
        mostrarHorarios={mostrarHorarios}
        mostrarNum={mostrarNum}
        setMostrarHorarios={setMostrarHorarios}
        setMostrarNum={setMostrarNum}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171f25'
    },
});