/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Container, Content, Text, Row, Item, Input, Tabs, 
   Tab, TabHeading, ScrollableTab,  FooterTab, Button, Badge } from 'native-base'

import Footer from './Footer'
import Header from './Header'

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
         <Tabs tabBarUnderlineStyle={{backgroundColor:'red'}}>
          <Tab heading="Tab1" >
            <Text >halo semua</Text>
          </Tab>
          <Tab heading="Tab2">
            <Text >halo semua</Text>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Text >halo semua</Text>
          </Tab>
        </Tabs>
         {/* <Content>
         </Content> */}
         <Footer />
      </Container>
   );
};

export default Home;
