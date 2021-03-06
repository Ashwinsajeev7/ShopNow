import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

//import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
    
  
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Home';
  } else {
    routeName = 'SignIn';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{header: () => null}}
         
      />
    </Stack.Navigator>
  );
};

export default AuthStack;