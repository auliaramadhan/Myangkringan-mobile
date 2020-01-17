/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Tabs,
   Tab, TabHeading, ScrollableTab, FooterTab, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right
} from 'native-base'


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
         <Tabs locked={true} renderTabBar={() =>
            <ScrollableTab underlineStyle={{ backgroundColor: "green" }} style={{ backgroundColor: "#fff", paddingLeft: 16 }} />}>
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>All</Text>
               </TabHeading>
            } />
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>Makanan Berat</Text>
               </TabHeading>
            } />
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>Makanan Ringan</Text>
               </TabHeading>
            } />
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>Minuman</Text>
               </TabHeading>
            } />
         </Tabs>
         <ListProduct />
         <Footer />
      </Container>
   );
};

export default Home;
