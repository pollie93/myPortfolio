import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './views/Inicio';
import MyGitHub from './views/myGitHub';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Inicio"
          component={Inicio}
        >
          
        </Stack.Screen>

        <Stack.Screen 
          name="MyGitHub"
          component={MyGitHub}       
        >

        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
