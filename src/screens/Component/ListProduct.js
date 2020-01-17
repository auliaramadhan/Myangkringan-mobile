/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right, Card, CardItem} from 'native-base'
import logo from '../../assets/img/logo.png'

const style = StyleSheet.create({
   name: {

   },
   name12: {

   },
})

const ListProduct = () => {
   return (
         <Content padder>
         {/* style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0, justifyContent:'space-around' }}> */}
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0, justifyContent:'space-around' }}>
               {/* <View style={{ flexBasis: '48%', height: 250, backgroundColor: 'powderblue', marginTop:5 }}> */}
               {Array(8).fill(<Card  style={{ flexBasis: '48%', marginTop:5 }}>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem cardBody>
               <Button rounded danger style={{position:'absolute',right:4}}> 	
                  <Icon name='eye'/> </Button>
              <Image source={logo} style={{height: 100, width: null, flex: 1}} resizeMode='cover'/>
            </CardItem>
            {/* <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>Click on any carditem</Text>
              </Body>
            </CardItem> */}
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
            <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Row>
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Text>4 Comments</Text>
                </Row>
              </Body>
              <Right>
                <Button bordered iconLeft>
                   <Icon name='plus' />
                   <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>)}
            </View> 
            </Content>
   );
};

export default ListProduct;
