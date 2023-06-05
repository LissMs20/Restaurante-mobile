import { StyleSheet, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from './src/screens/HomeScreen';
import { ReviewsScreen } from './src/screens/ReviewsScreen';
import { OrderScreen } from './src/screens/OrderScreen';
import { InformationsScreen } from './src/screens/InformationsScreen';

export default function App() {

  const Tab = createBottomTabNavigator();
 
    return (
      <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e6db4e',
          tabBarInactiveTintColor: '#4c5a87',
          style: {
            display: 'flex',
          },
          tabBarStyle: {
            backgroundColor: '#1f2930',
            display: 'flex',
            borderTopWidth: 0,
          },
        }}
        >
          <Tab.Screen name="Home" component={HomeScreen} 
            options={{tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={20} color="#4c5a87" />
            ),
            headerShown: true,
            header: () => {
              return (
                <View style={[styles.headerContainer, { backgroundColor: '#1f2930' }]}>
                  <Text style={[styles.headerText, { color: 'white' }]}>
                    Home
                  </Text>
                </View>
              );
            },
            }}
          />
          <Tab.Screen name="Avaliações" component={ReviewsScreen} 
          options={{tabBarIcon: ({ color, size }) => (
            <AntDesign name="staro" size={20} color="#4c5a87" />
          ),
          headerShown: true,
            header: () => {
              return (
                <View style={[styles.headerContainer, { backgroundColor: '#1f2930' }]}>
                  <Text style={[styles.headerText, { color: 'white' }]}>
                    Avaliações
                  </Text>
                </View>
              );
            },
            }}
          />
          <Tab.Screen name="Pedidos" component={OrderScreen} 
          options={{tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="playlist-add" size={24} color="#4c5a87" />
          ),
          headerShown: true,
            header: () => {
              return (
                <View style={[styles.headerContainer, { backgroundColor: '#1f2930' }]}>
                  <Text style={[styles.headerText, { color: 'white' }]}>
                    Pedidos
                  </Text>
                </View>
              );
            },
            }}
          />
          <Tab.Screen name="Informações" component={InformationsScreen} 
          options={{tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={24} color="#4c5a87" />
          ),
          headerShown: true,
            header: () => {
              return (
                <View style={[styles.headerContainer, { backgroundColor: '#1f2930' }]}>
                  <Text style={[styles.headerText, { color: 'white' }]}>
                    Informações
                  </Text>
                </View>
              );
            },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f25'
  },
  headerContainer: {
    paddingBottom: 8,
    paddingVertical: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})