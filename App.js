// In App.js in a new project

import * as React from 'react';

import client from './src/data/config/client';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from './src/presentation/screens/GalleryScreen'
import DetailScreen from './src/presentation/screens/DetailScreen'

const Stack = createNativeStackNavigator();



function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Detail" 
            component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;