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

            {!props.nofilter && <Button transparent>
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

export default HeaderBar;
