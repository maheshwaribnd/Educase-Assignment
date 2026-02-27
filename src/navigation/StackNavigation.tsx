import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import ListOfUsers from '../screens/ListOfUsers';
import UserDetails from '../screens/UserDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          animationDuration: 400,
        }}
      >
        <Stack.Screen
          // options={{ headerShown: false }}
          name="splash"
          component={SplashScreen}
        />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="listofusers" component={ListOfUsers} />
        <Stack.Screen name="userdetails" component={UserDetails} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
