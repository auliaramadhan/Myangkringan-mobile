/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Button, Header
} from 'native-base'

import ListProduct from './Component/ListProduct';


const Search = (props) => {
   return (
      <Container>
          <Header searchBar rounded style={{ backgroundColor: '#eee' }} >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
         <Content padder>
            <ListProduct navigation={props.navigation} /> 
         </Content>
      </Container>
   );
};

export default Search;
