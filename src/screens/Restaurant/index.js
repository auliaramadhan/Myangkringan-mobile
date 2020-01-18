/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Tabs,
   Tab, TabHeading, ScrollableTab, FooterTab, Button, Badge, List, ListItem, Left,  Body, Right
} from 'native-base'
import Thumbnail from './Thumbnail'
import logo from '../../assets/img/logo.png'


import Footer from '../Component/Footer'
import Header from '../Component/Header'

const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})


const Restaurant = () => {
   return (
      <Container>
         <Header nofilter nosearch name={"Restaurant"}/>
         <Content padder>
            <List>
               <Thumbnail />
               <Thumbnail />
               <Thumbnail />
               <Thumbnail />
            </List>
         </Content>
         {/* <Footer /> */}
      </Container>
   );
};

export default Restaurant;
