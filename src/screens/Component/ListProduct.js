/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right, Card, CardItem} from 'native-base'
import logo from '../../assets/img/logo.png'

const style = StyleSheet.create({
  card: {
    borderRadius: 50,
    paddingBottom: 0,
  } 
  ,name: {

   },
   name12: {

   },
})

const ListProduct = () => {
   return (
         <Content >
         {/* style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0, justifyContent:'space-around' }}> */}
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around' }}>
               {Array(8).fill(<Card  style={{ flexBasis: '48%', marginTop:5 }}>
            <CardItem header bordered onPress={() => alert("This is Card Header")} style={style.card}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem cardBody>
            <Button icon warning transparent style={{position:'absolute',top:-10}} >
                   <Icon name='eye' type='FontAwesome' />
                </Button>
               <Button  warning transparent icon style={{position:'absolute',right:4, top:-10}}> 	
                  <Icon name='add-circle'/> 
                  </Button>
              <Image source={logo} style={{height: 100, width: null, flex: 1}} resizeMode='contain'/>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Body>
                <Button transparent>
                  <Icon active name="star" />
                  <Text>4 Rating</Text>
                </Button>
                  <Text>4 Comments</Text>
                
              </Body>
            </CardItem>
          </Card>)}
            </View> 
            </Content>
   );
};

export default ListProduct;
