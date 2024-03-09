/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthProvider } from './screens/AuthContext'; // Assurez-vous du chemin correct
import FicheEnfant from './screens/FicheEnfant'; // Ajustez le chemin en fonction de la structure de votre projet

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FicheEnfant">
          <Stack.Screen
            name="FicheEnfant"
            component={FicheEnfant}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
