/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Button, Header
} from 'native-base'

import ListProduct from './Component/ListProduct';
import { getItems } from '../redux/action/getData';
import { connect } from 'react-redux';


const Search = (props) => {

   const [query, setQuery] = useState({page:1})
   useEffect(() => {
      props.dispatch(getItems(query))
    }, [query])
   let inputquery = {} ;

   const prevpage = () => query.page !== 1 ? setQuery({ ...query, page: query.page - 1 }) : null;
   const nextpage = () => query.page !== props.items.data.page.total_page ?
      setQuery({ ...query, page: query.page + 1 }) : null;

   return (
      <Container>
          <Header searchBar rounded style={{ backgroundColor: '#eee' }} >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search"  onChangeText={((v)=>inputquery ={name:v})} />
            <Button light
            onPress={()=> setQuery(inputquery)} ><Text>
               Search
            </Text></Button>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
         <Content padder>
            <ListProduct navigation={props.navigation} query={query} /> 
            <Row style={{ flex: 1, marginTop: 5 }}>
               <Button icon rounded warning onPress={prevpage} >
                  <Icon name='arrow-left' type='MaterialCommunityIcons' />
               </Button>
               <Button icon rounded warning style={{ marginLeft: 'auto' }} onPress={nextpage} >
                  <Icon name='arrow-right' type='MaterialCommunityIcons' />
               </Button>
            </Row>
         </Content>
      </Container>
   );
};

const mapStateToProps = state => {
   return {
     auth: state.auth,
   }
 }
 
 export default connect(mapStateToProps)(Search)