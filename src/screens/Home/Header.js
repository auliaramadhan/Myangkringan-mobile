/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Container, Content, Text, Row, Item, Input, Tabs, Tab, TabHeading, ScrollableTab, Footer, FooterTab, Button, Header, Badge, Right, Body } from 'native-base'


const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})


const Home = () => {
   return (
      <Header hasTabs searchBar style={{ backgroundColor: 'white' }}>
         <Body>
            <Item rounded bordered>
               <Icon name="ios-search" />
               <Input placeholder="Search" />
               <Icon name="ios-people" />
            </Item>
         </Body>
         <Right>
            <Button transparent>
               <Text>Search</Text>
            </Button>
         </Right>
      </Header>
   );
};

export default Home;
