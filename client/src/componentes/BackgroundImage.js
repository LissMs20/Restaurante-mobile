import { StyleSheet, ImageBackground, Text, View } from "react-native";

export function BackgroundImage({ imageUrl }) {
    return (
        <View style={styles.background}>
            <ImageBackground
                source={{ uri: imageUrl}}
                style={styles.imageBackground}>
                <Text style={styles.text}>Gourmet Fusion</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        opacity: 0.7,
        paddingTop: 25,
        paddingBottom: 25,
        marginTop: 15,
        alignItems: 'center',
        resizeMode: 'cover',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden'
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#e6db4e',
        backgroundColor: '#090f13',
        padding: 15,
        marginBottom: 80,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
    },

})