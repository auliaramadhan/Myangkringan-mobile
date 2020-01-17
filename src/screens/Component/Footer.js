/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text, Row, Item, Input, Tabs, Tab, TabHeading, ScrollableTab, Footer, FooterTab, Button, Header, Badge } from 'native-base'


const style = StyleSheet.create({
   name: {

   },
   cart: {
       flex: 0, width: 70 , marginTop: -50,
       borderWidth:2, borderRadius:40
       ,borderColor:'lightgrey'
   },
})


const Home = () => {
   return (
      <Footer style={{elevation: 100 }} >
         <FooterTab style={{ backgroundColor: '#333'}}>
            <Button  vertical >
               <Icon name="food" type='MaterialCommunityIcons' style={{ color: "lightgrey" }} />
               <Text>Store</Text>
            </Button>
            <Button  vertical >
               <Icon name="store" type='MaterialIcons' style={{ color: "lightgrey" }} />
               <Text>Restaurant</Text>
            </Button>
            {/* <Button vertical badge danger style={style.cart}>
            <Badge warning ><Text>51</Text></Badge>
                  <Icon active name="cart" style={{ color: "lightgrey" }} />
                  <Text>Cart</Text>
            </Button> */}
            <Button vertical  >
               <Icon active type='FontAwesome' name="user" style={{ color: "lightgrey" }} />
               <Text>Profile</Text>
            </Button>
         </FooterTab>
      </Footer>
   );
};

export default Home;
