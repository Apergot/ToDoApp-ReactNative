import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ToDoCreateScreen from './screens/ToDoCreateScreen'

const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'To-Do' }}/>
			<Stack.Screen name="Profile" component={ToDoCreateScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
