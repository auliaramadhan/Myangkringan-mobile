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
    }, [])

   return (
      <Container>
         <Header name={"Home"} navigation={props.navigation} setQuery={setQuery} />
         {/* <Tabs locked={true} renderTabBar={() =>
            <ScrollableTab underlineStyle={{ backgroundColor: "green" }} 
            style={{ backgroundColor: "#fff", paddingLeft: 16 }} />}>
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>All</Text>
               </TabHeading>
            } />
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>Makanan Berat</Text>
               </TabHeading>
            } />
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>Makanan Ringan</Text>
               </TabHeading>
            } />
            <Tab heading={
               <TabHeading style={{ backgroundColor: "#fff" }}>
                  <Text style={{ color: "gray" }}>Minuman</Text>
               </TabHeading>
            } />
         </Tabs>
            */}
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
