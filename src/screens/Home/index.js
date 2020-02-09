/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content,
} from 'native-base'


import Footer from '../Component/Footer'
import Header from '../Component/Header'
import ListProduct from '../Component/ListProduct';
import { getItems } from '../../redux/action/getData';
import { connect } from 'react-redux';


const Home = (props) => {
   
   const [query, setQuery] = useState({})
   useEffect(() => {
      props.dispatch(getItems(query))
    }, [query])

   return (
      <Container>
         <Header name={"Home"} navigation={props.navigation} setQuery={setQuery} />
         <Content padder>
            <ListProduct navigation={props.navigation} query={query} /> 
         </Content>
         
         {/* <Footer /> */}
      </Container>
   );
};

const mapStateToProps = state => {
   return {
     auth: state.auth,
   }
 }
 
 export default connect(mapStateToProps)(Home)
