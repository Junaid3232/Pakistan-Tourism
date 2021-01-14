import React from 'react';
import {View} from 'react-native';
import HomeScreen from './app/Screens/homeScreen';
import islamabadScreen from './app/Screens/islamabadScreen';
import lahoreScreen from './app/Screens/lahoreScreen';
import karachiScreen from './app/Screens/karachiScreen';
import peshawerScreen from './app/Screens/peshawerScreen';
import quettaScreen from './app/Screens/quettaScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IslamabdHotels from './app/Screens/DetailScreen/IslamabadHotels';
import IslamabdParkScreen from './app/Screens/DetailScreen/islamabad/IslamabadParkScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0fd9fc',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Islamabad" component={islamabadScreen} />
        <Stack.Screen name="Lahore" component={lahoreScreen} />
        <Stack.Screen name="Karachi" component={karachiScreen} />
        <Stack.Screen name="Peshawer" component={peshawerScreen} />
        <Stack.Screen name="Quetta" component={quettaScreen} />
        <Stack.Screen name="IslamabadHotels" component={IslamabdHotels} />
        <Stack.Screen name="IslamabadParks" component={IslamabdParkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
