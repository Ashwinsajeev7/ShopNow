import React from 'react';
import {
   View,
   Text,
   Image,
   Button,
   StyleSheet,
   ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as cartActions from '../store/actions/cart';





const Detailscreen = props => {


  const productId = props.route.params.productId;
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
       <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
         <View style={styles.actions}>
            <Button color={Colors.primary} title='Add to Cart' onPress={() => {
               dispatch(cartActions.addToCart(selectedProduct));
            }} />
         </View>
         <Text style={styles.price}>₹{selectedProduct.price.toFixed(2)}</Text>
         <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
 )
}


const styles = StyleSheet.create({
  image: {
     width: '100%',
     height: 300
  },
  actions: {
     marginVertical: 20,
     alignItems: 'center'
  },
  price: {
     fontSize: 20,
     color: '#888',
     textAlign: 'center',
     marginVertical: 20,
     fontFamily: 'open-sans-bold'
  },
  description: {
     fontFamily: 'open-sans',
     fontSize: 14,
     textAlign: 'center',
     marginHorizontal: 20
  }
});

export default Detailscreen;










  