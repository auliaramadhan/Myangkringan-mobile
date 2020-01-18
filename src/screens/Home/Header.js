/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Container, Content, Text, Row, Item, Input, Button, Header, Badge, Right, Body, Left, Title, Subtitle } from 'native-base'


const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})


const HeaderBar = (props) => {
   return (
      <Header searchBar style={{backgroundColor:'#fff'}} >
         <Left>
            <Button transparent>
               <Icon name='arrow-back' style={{ color: 'black' }} />
            </Button>
         </Left>
         <Body>
            <Title style={{color:'darkslategray'}} >Home</Title>
         </Body>
         <Right>
            <Button transparent onPress={()=>{

            }}>
               <Icon name='filter' type='FontAwesome' style={{ color: 'black' }} />
            </Button>
            <Button transparent>
               <Icon name='search' type='MaterialIcons' style={{ color: 'black' }} />
            </Button>
            <Button transparent >
               <Badge  style={{ position: 'absolute', right: 0,scaleX: 0.7, scaleY: 0.7 }}>
                  <Text style={{ fontSize: 10 }}>22</Text>
               </Badge>
               <Icon name="cart" style={{ color: "black" }} />
            </Button>
         </Right>
      </Header>
   );
};
export default HeaderBar;
