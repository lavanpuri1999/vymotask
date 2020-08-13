import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from "./components/Home"
import Show from "./components/Show"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default function App() {
  return (
    // <div  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        }}>
            <Stack.Screen name="Show" component={Show} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

    // </div>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
