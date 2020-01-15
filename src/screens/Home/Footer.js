/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text, Row, Item, Input, Tabs, Tab, TabHeading, ScrollableTab, Footer, FooterTab, Button, Header, Badge } from 'native-base'


const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})


const Home = () => {
   return (
         <Footer >
            <FooterTab>
               <Button vertical>
                  <Icon name="apps" />
                  <Text>Apps</Text>
               </Button>
               <Button vertical>
                  <Icon name="camera" />
                  <Text>Camera</Text>
               </Button>
               <Button  active badge vertical success
                  style={{marginTop:-40, borderRadius:50}}>
                  <Badge ><Text>51</Text></Badge>
                  <Icon active name="cart" color={''} />
                  <Text>Cart</Text>
               </Button>
               <Button vertical active>
                  <Icon active name="navigate" />
                  <Text note>Navigate</Text>
               </Button>
               <Button vertical>
                  <Icon name="checkout" />
                  <Text >Checkout</Text>
               </Button>
            </FooterTab>
         </Footer>
   );
};

export default Home;
