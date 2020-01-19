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
import { connect } from 'react-redux';
import { getRestaurants } from '../../redux/action/getData';

const Restaurant = (props) => {
   
   useEffect(() => {
      //dispatch
      props.dispatch(getRestaurants(props.query))
      
    }, [])
   return (
      <Container>
         <Header nofilter nosearch name={"Restaurant"} navigation={props.navigation}  />
         <Content padder>
            <List>
              {props.restaurants.data && 
              props.restaurants.data.map((v,i)=>
               <Thumbnail
               key={i}
               data={v} 
               navigation={props.navigation} />
               )}
            </List>
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

export default connect(mapStateToProps)(Restaurant)
