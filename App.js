import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Introduccion from './views/Introduccion';
import MyGitHub from './views/MyGitHub';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Introduccion"
          component={Introduccion}
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
