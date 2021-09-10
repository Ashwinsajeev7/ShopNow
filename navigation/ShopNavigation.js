import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Homescreen'
import Detailscreen from '../screens/Detailscreen';
import Cartscreen from '../screens/Cartscreen';
import Profilescreen from '../screens/Profilescreen';



const Stack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

function Root() {
return (
<Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="shirt" color={color} size={26} />
          ),
        }}
      />
      
      
      <Tab.Screen
        name="Cart"
        component={Cartscreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="cart-sharp" color={color} size={26} />
          ),
        }}
        
      />
      
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>);

}


const ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
    activeColor="#fff" screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="SHOP NOW" component={Root} options={{
          title: 'SHOP NOW',
          headerStyle: {
            backgroundColor: '#1f65ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 25,
            
        fontWeight: 'bold',
        
          },
        }}/>
      <Stack.Screen name="ProductDetail" component={Detailscreen} />
      
    </Stack.Navigator>
  )

    
};



export default ShopNavigation;



 