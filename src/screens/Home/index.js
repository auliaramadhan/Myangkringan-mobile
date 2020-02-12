/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Row, Button, Spinner,
} from 'native-base'


import Footer from '../Component/Footer'
import Header from '../Component/Header'
import ListProduct from '../Component/ListProduct';
import { getItems } from '../../redux/action/getData';
import { connect } from 'react-redux';


const Home = (props) => {

   const [query, setQuery] = useState({ page: 1 })
   useEffect(() => {
      props.dispatch(getItems(query))
      console.log('hai  '+ props.item)
   }, [query])

   const prevpage = () => query.page !== 1 ? setQuery({ ...query, page: query.page - 1 }) : null;
   const nextpage = () => query.page !== props.items.data.page.total_page ?
      setQuery({ ...query, page: query.page + 1 }) : null;

   return (
      <Container>
         <Header name={"Home"} navigation={props.navigation} setQuery={setQuery} />
         <Content padder>
         {props.items.isLoading && <Spinner /> }
   {!props.items.isLoading && <ListProduct navigation={props.navigation} query={query} /> }
            <Row style={{ flex: 1, marginTop: 5 }}>
               <Button icon rounded warning onPress={prevpage} >
                  <Icon name='arrow-left' type='MaterialCommunityIcons' />
               </Button>
               <Button icon rounded warning style={{ marginLeft: 'auto' }} onPress={nextpage} >
                  <Icon name='arrow-right' type='MaterialCommunityIcons' />
               </Button>
            </Row>
         </Content>

         {/* <Footer /> */}
      </Container>
   );
};

const mapStateToProps = state => {
   return {
      auth: state.auth,
      items: state.itemList
   }
}

export default connect(mapStateToProps)(Home)
