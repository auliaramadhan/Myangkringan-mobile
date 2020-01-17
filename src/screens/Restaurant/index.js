/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Tabs,
   Tab, TabHeading, ScrollableTab, FooterTab, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right
} from 'native-base'
import logo from '../../assets/img/logo.png'


import Footer from './Footer'
import Header from './Header'

const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})


const Restaurant = () => {
   return (
      <Container>
         <Header />
         <Content padder>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0, justifyContent:'space-around' }}>
               <View style={{ flexBasis: '48%', height: 50, backgroundColor: 'powderblue' }} />
            </View>
            <List>
               <ListItem thumbnail style={{paddingBottom:5}}>
                  <Left>
                     <Thumbnail square source={logo} />
                  </Left>
                  <Body>
                     <Text>Sankhadeep</Text>
                     <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                  </Body>
                  <Right>
                     <Button transparent>
                        <Text>View</Text>
                     </Button>
                  </Right>
               </ListItem>
            </List>
            <List style={{ display: 'flex' }} >
               <ListItem style={{ flex: .4 }}>
                  <Text>Simon Mignolet</Text>
               </ListItem>
               <ListItem style={{ flexBasis: 40 }}>
                  <Text>Nathaniel Clyne</Text>
               </ListItem>
               <ListItem>
                  <Text>Dejan Lovren</Text>
               </ListItem>
            </List>
         </Content>
         <Footer />
      </Container>
   );
};

export default Restaurant;
