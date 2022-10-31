import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Result from './screens/Result'


export default function App() {

  const Stack = createNativeStackNavigator();
  const [ query, setQuery ] = useState( null );

  return (
    <NavigationContainer>
      <StatusBarExpo barStyle="light" backgroundColor='#292929' />
      <StatusBar barStyle="light-content" backgroundColor='#292929' />
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#292929',
          alignItems: "center"
        },
        headerTintColor: '#f2f2f2',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
      }}>
        <Stack.Screen name="Home" options={{ headerTitle: "PicSpace" }}>
          {( props => ( <Home {...props} setQuery={setQuery} /> ) )}
        </Stack.Screen>
        <Stack.Screen name="Result" options={{ headerTitle: query ? `Results for - ${query}` : "Suggested for you" }} >
          {( props => ( <Result {...props} query={query} /> ) )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
}
