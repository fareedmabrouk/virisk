import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Ratings from './screens/ratings';
import Form from './screens/form';
import Scorecard from './screens/scorecard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />        
        <Stack.Screen name="Rating" component={Ratings} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Scorecard" component={Scorecard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;