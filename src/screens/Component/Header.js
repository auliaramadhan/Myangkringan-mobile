/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Container, Content, Text, Row, Item, Input, Button, Header, Badge, Right, Body, Left, Title, Subtitle, ActionSheet } from 'native-base'
import { connect } from 'react-redux';
import { getCart, getProfile } from '../../redux/action/getData';
import { postLogout } from '../../redux/action/postData';

var BUTTONS = ["rating", "price", "name", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const HeaderBar = (props) => {
   
   useEffect(() => {
      props.dispatch(getCart(props.auth.token))
    }, [props.cart.status,props.checkout.status])

    useEffect(() => {
      props.dispatch(getProfile(props.auth.token))
   }, [])
     
   const logOut = async() => {
      await props.dispatch(postLogout(props.auth.token))
      console.log(props.auth)
      props.navigation.navigate('Login')
      if (props.auth.status.success) {
      } 
   }
    
   return (
      <Header searchBar style={{ backgroundColor: '#eee' }} >
         <Left>
            {/* <Button transparent>
               <Icon name='arrow-back' style={{ color: 'black' }} />
            </Button> */}
         </Left>
         <Body>
            <Title style={{ color: 'gray' }} >{props.name}</Title>
         </Body>
         <Right>

            {!props.nofilter && <Button transparent 
            onPress={() =>
               ActionSheet.show(
                 {
                   options: BUTTONS,
                   cancelButtonIndex: CANCEL_INDEX,
                   destructiveButtonIndex: DESTRUCTIVE_INDEX,
                   title: "Order By"
                 },
                 buttonIndex => {
                   props.setQuery({ clicked: BUTTONS[buttonIndex] });
                 }
               )}>
               <Icon name='filter' type='FontAwesome' style={{ color: 'black' }} />
            </Button>}
            {!props.nosearch && 
            <Button transparent
            onPress={()=>props.navigation.navigate('Search')}>
               <Icon name='search' type='MaterialIcons' style={{ color: 'black' }} />
            </Button>}
            <Button icon transparent 
            onPress={()=>props.navigation.navigate('Cart')} >
               <Badge style={{ position: 'absolute', right: 0 }}>
                  <Text style={{ fontSize: 10 }}>
                     {props.cart.data && props.cart.data.length}
                  </Text>
               </Badge>
               <Icon name="cart" style={{ color: "black" }} />
            </Button>
            {props.logout && 
            <Button transparent
            onPress={()=>logOut()}>
               <Icon name='logout' type='MaterialCommunityIcons' style={{ color: 'black' }} />
            </Button>}
         </Right>
      </Header>
   );
};


const mapStateToProps = state => {
   return {
     cart: state.cart,
     checkout: state.checkout
     , auth: state.auth,
     profile: state.profile
   }
 }
 
 export default connect(mapStateToProps)(HeaderBar)
