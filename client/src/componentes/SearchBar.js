import { StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export function SearchBar({ pesqText, setPesqText, apertarPesquisar }) {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder='Digite o nome do prato'
                placeholderTextColor="#999"
                value={pesqText}
                onChangeText={text => setPesqText(text)}
            />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={apertarPesquisar}>
                <Entypo name="magnifying-glass" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
  }

  const styles = StyleSheet.create({
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#752e2b',
        padding: 12,
        borderRadius: 8,
        color: '#a6a6a6',
    },
    searchButton: {
        padding: 15,
        height: 55,
        borderRadius: 10,
        backgroundColor: '#752e2b',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginLeft: 8,
        borderRadius: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#171f25',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomColor: '#444',
    },
  });