/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
   Icon, Container, Content, Text,List, ListItem, Left,  Body, Right, CardItem, Card
} from 'native-base'
import Thumbnail from './Thumbnail'
import logo from '../../assets/img/logo.png'


import Footer from '../Component/Footer'
import Header from '../Component/Header'

const Restaurant = (props) => {
   
   useEffect(() => {
      //dispatch
    }, [])
   return (
      <Container>
         <Header nofilter nosearch name={"Restaurant"} navigation={props.navigation}  />
         <Content padder>
         <Card style={{flex: 0}}>
         <CardItem header bordered style={{ paddingBottom: 8, paddingTop: 8 }}>
            <Body>
                <Text>Nama Product</Text>
                <Text note>
                  <Icon name="star" style={{ color: 'gold', fontSize: 16 }} /> dad
                </Text>
            </Body>
          </CardItem>
            <CardItem>
              <Body>
                <Image source={logo} style={{height: 200, width: 200, alignSelf:'center'}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
            <List>
               <Thumbnail data={props.restaurant} navigation={props.navigation} />
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
