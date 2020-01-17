/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Tabs,
   Tab, TabHeading, ScrollableTab, FooterTab, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right
} from 'native-base'
import logo from '../../../assets/img/logo.png'


import Footer from '../Component/Footer'
import Header from './Header'
import ListProduct from '../Component/ListProduct';

const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})


const Home = () => {
   return (
      <Container>
         <Header />
         {/* <Tabs tabContainerStyle={{backgroundColor:'#000'}} 
         tabBarUnderlineStyle={{backgroundColor:'red'}}>
          <Tab heading="Tab1"  >
            <Text >halo semua</Text>
          </Tab>
          <Tab heading="Tab2">
            <Text >halo semua</Text>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Text >halo semua</Text>
          </Tab>
        </Tabs> */}
         {/* <Content padder>
            <ListProduct />
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
         </Content> */}
         <ListProduct />
         <Footer />
      </Container>
   );
};

export default Home;
