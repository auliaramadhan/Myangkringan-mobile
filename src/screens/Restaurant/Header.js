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


const Home = () => {
   return (
      <Header searchBar style={{backgroundColor:'#eee'}} >
         <Left>
            <Button transparent>
               <Icon name='arrow-back' style={{ color: 'black' }} />
            </Button>
         </Left>
         <Body>
            <Title style={{color:'gray'}} >Home</Title>
         </Body>
         <Right>

            <Button transparent>
               <Icon name='filter' type='FontAwesome' style={{ color: 'black' }} />
            </Button>
            <Button transparent>
               <Icon name='search' type='MaterialIcons' style={{ color: 'black' }} />
            </Button>
            <Button transparent >
               <Badge style={{ position: 'absolute', right: 0 }}>
                  <Text style={{ fontSize: 10 }}>22</Text>
               </Badge>
               <Icon name="cart" style={{ color: "black" }} />
            </Button>
         </Right>
      </Header>
   );
};
// <Header hasTabs searchBar style={{ backgroundColor: '#fff' }}>
//    <Left>
//       <Button bordered primary>
//          <Text>Search</Text>
//       </Button>
//    </Left>
//    <Body>
//       <Item rounded bordered >
//          <Icon name="ios-search" />
//          <Input placeholder="Search" />
//          <Icon name="ios-people" />
//       </Item>
//    </Body>
//    <Right>
//       <Button transparent>
//          <Text>Search</Text>
//       </Button>
//    </Right>
// </Header>

export default Home;
