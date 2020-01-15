/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {  Container,  Content, Text, Row,  Item, Input, Tabs, Tab, TabHeading, ScrollableTab,Footer, FooterTab, Button } from 'native-base'


const style = StyleSheet.create({
  header: {
    borderBottomColor: 'gray'
    , borderBottomWidth: 0.4,
    marginTop: 8,
    paddingHorizontal:20
    // ,elevation:5
  },
  navbar: {
    marginTop: 0, paddingHorizontal: 16, paddingBottom: 8
  },
  product: {
    paddingHorizontal: 16
  },
  heading:{
    justifyContent: "space-between", marginHorizontal: 16, marginVertical:4
  },
  card: {
    backgroundColor: '#fff',
    borderRadius:20,
    // alignItems:'center',
    flex: 1,
    // elevation: 5,
    // marginRight: 2,
    padding: 10,
  },
})

export default class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={style.header} >
            <Item style={{ backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 20
              , borderWidth:1, borderColor:"#eff", elevation:5  }}>
              <Icon active name='navicon' size={20} />
              <Input placeholder='Search for App and Games' />
              <Icon active name='microphone' size={20} />
            </Item>

            <Tabs locked={true} renderTabBar={()=> <ScrollableTab underlineStyle={{backgroundColor:"green"}} style={{backgroundColor:"#fff", paddingLeft:16}} />}>

                  <Tab heading={
                    <TabHeading style={{ backgroundColor:"#fff"}}>
                      <Text style={{color:"gray"}}>Top Charts</Text>
                    </TabHeading>
                  }>
                  </Tab>
                  <Tab heading={
                    <TabHeading style={{backgroundColor:"#fff"}}>
                      <Text style={{color:"gray"}}>Premium</Text>
                    </TabHeading>
                  }>
                  </Tab>
                  <Tab heading={
                    <TabHeading style={{backgroundColor:"#fff"}}>
                      <Text style={{color:"gray"}}>Categories</Text>
                    </TabHeading>
                  }>
                  </Tab>
              </Tabs>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
          <Row style={style.heading}>
            <Text style={{fontWeight:'bold'}}>Games You Might Like</Text>
            <Icon name="arrow-right" size={16} />
          </Row>

          <ScrollView horizontal={true} style={style.product}
            showsHorizontalScrollIndicator={false}>
              { games.map((v,i) =>
            <View style={style.card}>
              <Image source={{uri:v.icon}}
                style={{width: 90, height:90, borderRadius:20, marginBottom:8}}  />
              <Text style={{fontSize:10}} >{v.name} </Text>
              <Text style={{fontSize:12}}> {v.size} MB </Text>
            </View>
              )}
          </ScrollView>

          <Row style={style.heading}>
            <Text style={{fontWeight:'bold'}}>Communication</Text>
            <Icon name="arrow-right" size={16} />
          </Row>

          <ScrollView horizontal={true} style={style.product}
          showsHorizontalScrollIndicator={false}>
              { communication.map((v,i) =>
            <View style={style.card}>
              <Image source={{uri:v.icon}}
                style={{width: 90, height:90, borderRadius:20, marginBottom:8}}  />
              <Text style={{fontSize:10}} >{v.name} </Text>
              <Text style={{fontSize:12}}> {v.size} MB </Text>
            </View>
              )}
          </ScrollView>
          
          <Row style={style.heading}>
            <Text style={{fontWeight:'bold'}}>Communication</Text>
            <Icon name="arrow-right" size={16} />
          </Row>

          <ScrollView horizontal={true} style={style.product}
          showsHorizontalScrollIndicator={false}>
              { social.map((v,i) =>
            <View style={style.card}>
              <Image source={{uri:v.icon}}
                style={{width: 90, height:90, borderRadius:20, marginBottom:8}}  />
              <Text style={{fontSize:10}} >{v.name} </Text>
              <Text style={{fontSize:12}}> {v.size} MB </Text>
            </View>
              )}
          </ScrollView>




          </ScrollView>

        </Content>

        <Footer style={{backgroundColor:'#fff'}}>
          <FooterTab style={{backgroundColor:'#fff'}} >
            <Button vertical>
              <Icon name="gamepad" size={16} />
              <Text style={{color:'gray'}}>Games</Text>
            </Button>
            <Button vertical>
              <Icon name="layer-group" size={16}/>
              <Text style={{color:'gray'}}>App</Text>
            </Button>
            <Button vertical>
              <Icon name="movies" size={16}/>
              <Text style={{color:'gray'}}>Movies</Text>
            </Button>
            <Button vertical>
              <Icon name="book" size={16}/>
              <Text style={{color:'gray'}}>Book</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}


const games = [
  {
    icon:'https://lh3.googleusercontent.com/K-MNjDiO2WwRNwJqPZu8Wd5eOmFEjLYkEEgjZlv35hTiua_VylRPb04Lig3YZXLERvI=s128-rw'
    , name:'Clash Royale', size:'400'
  },
  {
    icon:'https://lh3.googleusercontent.com/AheIQJ2QPiLTblLISmh6genyxbO2A0n_IDJsGSAYNA5tHZLxkWHzZMIC70MKheQ0vg=s128-rw'
    , name:'Guns & Glory ', size:'500'
  },
  {
    icon:'https://lh3.googleusercontent.com/pzvOubPcbMwlnizDDAyzRD0Zx0dY2P8dwAtCDXy7MUpKrlnjNh1TG_v2cBkahL38_dY=s128-rw'
    , name:'Tap tap Fish', size:'78'
  },
  {
    icon:'https://lh3.googleusercontent.com/1sFpSpWBqR4j1tuJsKpOgOFpKO_t8tqe1--Skz4GMthyDy7b5R6PWR12hkd4DWzg7fSv=s128-rw'
    , name:'Vivian & Knight', size:'217'
  },
]
const communication = [
  {
    icon:'https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s128-rw'
    , name:'WhastApp', size:'35'
  },
  {
    icon:'https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s128-rw'
    , name:'Facebook', size:'56'
  },
  {
    icon:'https://lh3.googleusercontent.com/3NXJzGCtMMm-9PU_G-RrfB3KMrBRgMw-odxrIAekSZU1WOGexDoKTMDhtzGs4kJlKQ=s128-rw'
    , name:'MiChat', size:'75'
  },
  {
    icon:'https://lh3.googleusercontent.com/sla2xxbP2QLGJxZhSB8sfc4DTKRwRot2zI4WkMzLAq_CY6-PeGGNneMTT-SqlQKhLGtx=s128-rw'
    , name:'Messenger ', size:'88'
  },
]
const social = [
  {
    icon:'https://lh3.googleusercontent.com/4FI2YJ1IvEa5QhxGXf57PfmUu-vlkd4LdQbpBHwhUbNobktTfWHfN4Cf6lrgEt3NR0o=s128-rw'
    , name:'Hago', size:'437'
  },
  {
    icon:'https://lh3.googleusercontent.com/mvr4VlBZO9fBp04PQ9ZiPUksKFi6Hu-g2ySedEXtmQEVefw2RyYRGUniyVanvweOd6Y=s128-rw'
    , name:'Tik-Tok', size:'126'
  },
  {
    icon:'https://lh3.googleusercontent.com/-qxVavjDYF_yaMIS0-10hElpUq4Tr99w_GepQL5w3YslpjcZZgN-AGn3FvDG9MSFR_MF=s128-rw'
    , name:'Bigo Live', size:'277'
  },
  {
    icon:'https://lh3.googleusercontent.com/6CU9ZZ7yu26Xv3-YqtbG8SgxcZJ9qWrXtx1jnKswBd0kButU5mk4Bb2MmUBBtDjUa68=s128-rw'
    , name:'Tantan', size:'2188'
  },
]
const music = [
  {
    icon:''
    , name:'', size:''
  },
  {
    icon:''
    , name:'', size:''
  },
  {
    icon:''
    , name:'', size:''
  },
  {
    icon:''
    , name:'', size:''
  },
]
