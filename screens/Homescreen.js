import React, { useState, useEffect, useCallback } from 'react';
import {
   View,
   Button,
   Text,
   StyleSheet,
   FlatList,
   Platform,
   ActivityIndicator
} from 'react-native';

import { useSelector,useDispatch } from 'react-redux';
//import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import * as cartActions from '../store/actions/cart';

import ProductItem from '../components/shop/ProductItem';
import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';


const Homescreen = props => {
  
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetail', {
       productId: id,
        productTitle: title
     });
  };



  return (
     
    <FlatList
       
       data={products}
       keyExtractor={item => item.id}
       renderItem={itemData =>
          <ProductItem
             image={itemData.item.imageUrl}
             title={itemData.item.title}
             price={itemData.item.price}
             onSelect={() => {
                selectItemHandler(itemData.item.id, itemData.item.title)
             }}
          >
             <Button
                color={Colors.primary}
                title='View Details'
                onPress={() => {
                   selectItemHandler(itemData.item.id, itemData.item.title)
                }}
             />
             <Button
                color={Colors.primary}
                title='To Cart'
                onPress={() => {
                  dispatch(cartActions.addToCart(itemData.item));
                }}
             />
          </ProductItem>
       }
    />
 )
};

const styles = StyleSheet.create({
  centered: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
  }
})

export default Homescreen;










