/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
   Icon, Container, Content, Text,List, ListItem, Left,  Body, Right, CardItem, Card
} from 'native-base'
import Thumbnail from './Thumbnail'
import logo from '../../assets/img/logo.png'

import ListProduct from '../Component/ListProduct';
import { connect } from 'react-redux';
import { getRestaurants } from '../../redux/action/getData';

const ByRestaurant = (props) => {
   
   useEffect(() => {
      //dispatch      
    }, [])
   return (
      <Container>
         {/* <Header nofilter nosearch name={"Restaurant"} navigation={props.navigation}  /> */}

         <Content padder>
         <Card style={{flex: 0}}>
         <CardItem header bordered style={{ paddingBottom: 8, paddingTop: 8 }}>
            <Body>
                <Text>{props.navigation.state.params.data.name} </Text>
                <Text note>
                {props.navigation.state.params.data.description}
                </Text>
            </Body>
          </CardItem>
            <CardItem>
              <Body>
                <Image source={{
                  uri:"http://52.91.248.206:8080" + props.navigation.state.params.data.logo
                }} style={{height: 200, width: 200, alignSelf:'center', borderRadius:40}}/>
              </Body>
            </CardItem>
          </Card>

          <ListProduct navigation={props.navigation} 
          query={{byRestaurant:props.navigation.state.params.data.id}} />
         </Content>
         {/* <Footer /> */}
      </Container>
   );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(ByRestaurant)
