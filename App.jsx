import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import WelcomeScreen from './src/WelcomeScreen';
import HomeScreen from './src/HomeScreen';
import AboutUsScreen from './src/AboutUsScreen';
import ModelScreen1 from './src/ModelScreen1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name="model1"
          component={ModelScreen1}
         
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
