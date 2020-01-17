/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Tabs,
   Tab, TabHeading, ScrollableTab, FooterTab, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right
} from 'native-base'
import logo from '../../assets/img/logo.png'


import Footer from '../Component/Footer'
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
            <List>
               <Thumbnail />
               <Thumbnail />
               <Thumbnail />
               <Thumbnail />
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
