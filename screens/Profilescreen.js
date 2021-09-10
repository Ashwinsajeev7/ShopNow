import React, { useEffect, useState ,useContext} from 'react';
import { View, Text, FlatList, Platform, ActivityIndicator, StyleSheet } from 'react-native';
//import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../components/shop/OrderItem';
import ordersActions from '../store/actions/orders';
import Colors from '../constants/Colors';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const Profilescreen = () => {


 

   const { user, logout} = useContext(AuthContext);
  return(
    
    <View style={styles.container}>
    <Text style={styles.text}>Welcome {user.email}</Text>
       <FormButton
       
        buttonTitle="logout"

        onPress={() => logout()}
      />
    </View>
    
);
};


export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color:'#333333',
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    width: 500,
    height: 5,
},
middle: {
  flex: 1,
  backgroundColor: '#2457C5',
  width: 500,
    height: 5,
    paddingLeft: 70,
    
    justifyContent: 'center',
  
},
footer: {
    flex: 12,
    
},
text_header: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 30
},
text_middle: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 15
},

});

