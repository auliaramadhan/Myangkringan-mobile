/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Container, Content, Text, Row, Item, Input, Button, Header, Badge, Right, Body, Left, Title, Subtitle, ActionSheet } from 'native-base'


const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})

var BUTTONS = ["rating", "price", "name", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const HeaderBar = (props) => {
   
   const [query, setQuery] = useState({})
   
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
                   setQuery({ clicked: BUTTONS[buttonIndex] });
                 }
               )}>
               <Icon name='filter' type='FontAwesome' style={{ color: 'black' }} />
            </Button>}
            {!props.nosearch && 
            <Button transparent>
               <Icon name='search' type='MaterialIcons' style={{ color: 'black' }} />
            </Button>}
            <Button icon transparent 
            onPress={()=>props.navigation.navigate('Cart')} >
               <Badge style={{ position: 'absolute', right: 0 }}>
                  <Text style={{ fontSize: 10 }}>22</Text>
               </Badge>
               <Icon name="cart" style={{ color: "black" }} />
            </Button>
            {props.logout && 
            <Button transparent
            onPress={()=>props.navigation.navigate('Login')}>
               <Icon name='logout' type='MaterialCommunityIcons' style={{ color: 'black' }} />
            </Button>}
         </Right>
      </Header>
   );
};

export default HeaderBar;
