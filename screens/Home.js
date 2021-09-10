import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function home() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
     flex:0,
     justifyContent: 'center',
     alignItems: 'center',
     padding :20,
  },
  text: {
    fontSize: 24,
    color:'#333333',
  },
  
});


export default home;
 /*import React, {useContext} from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import FormButton from '../components/FormButton';
 import { AuthContext } from '../navigation/AuthProvider';
 

 const Home=({}) =>{
  const { user, logout} = useContext(AuthContext);
   return (
     <View style={styles.container}>
       <Text style={styles.text}>Welcome </Text>
       <FormButton
       
        buttonTitle="logout"

        onPress={() => logout()}
      />
      
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#f9fafd',
      flex:0,
      justifyContent: 'center',
      alignItems: 'center',
      padding :20,
   },
   text: {
     fontSize: 24,
     color:'#333333',
   },
   
 });
 
 export default Home;*/
 