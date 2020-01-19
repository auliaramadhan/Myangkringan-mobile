/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Button, Badge, List, ListItem, Left, Body, Right, Toast
} from 'native-base'
import Item from './Component/ItemCart'
import logo from '../assets/img/logo.png'
import { SwipeRow } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { deleteCart } from '../redux/action/deletePutData'
import { getCart } from '../redux/action/getData';
import { postCheckout } from '../redux/action/postData';
import _ from 'lodash'


const style = StyleSheet.create({
   standaloneRowBack: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
   },
})

const Cart = (props) => {

   useEffect(() => {
      Toast.show({
         text: "swipe left to delete",
         buttonText: "Okay",
         duration: 2000
      })
      //dispatch
   }, [])

   useEffect(() => {
      props.dispatch(getCart(props.auth.token))
   }, [props.cart.status])

   const removeFromCart = async (id) => {
      props.dispatch(deleteCart(props.auth.token, id))
      console.log(props.cart.status)
      if (props.cart.status.success) {
         alert('data berhasil dihapus')
      } else {
         alert('terdapat error pada database')
      }
   }
   const checkoutCart = async () => {
      const inputs = {
         first_name: props.profile.first_name,
         last_name: props.profile.last_name,
         address: props.profile.address,
         phone: props.profile.phone,
         total_harga: _.sumBy(props.cart.data, (v) => v.total)
      }
      console.log(inputs.total_harga)
      if (!inputs.total_harga) {
         return alert('please fill you cart first')
      }
      await props.dispatch(postCheckout(props.auth.token, inputs))
      // props.history.push('/store')
      if (props.checkout.status.success) {
         props.dispatch(getCart(props.auth.token))
         props.navigation.navigate.goBack();
      }
   }


   return (
      <Container>
         <Content padder>
            <Item />
            <Item />
            <Item />
            {props.cart.data &&
               props.cart.data.map((v, i) =>
                  <SwipeRow rightOpenValue={-75} key={i}>
                     <View style={style.standaloneRowBack} >
                        <View></View>
                        <View style={{ height: 'auto' }}>
                           <Button icon danger style={{ height: '100%', padding: 0 }}
                              onPress={() => removeFromCart(v.id)}>
                              <Icon name='trash' type='FontAwesome' />
                           </Button>
                        </View>
                     </View>
                     <Item data={v} />
                  </SwipeRow>
               )}

            <Button iconLeft block rounded success
            onPress={checkoutCart}>

               <Icon name='check' type='MaterialIcons' />
               <Text>Checkout</Text>
            </Button>
         </Content>
      </Container>
   );
};

const mapStateToProps = state => {
   return {
      auth: state.auth,
      cart: state.cart,
      checkout: state.checkout,
      profile: state.profile,
   }
}

export default connect(mapStateToProps)(Cart)