/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import reactimg from '../../assets/img/react.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'dodgerblue',
    padding: 16,
    flex: 1,
    flexDirection: 'column',
  },
  headtitle: {
    flexDirection: 'row',
  },
  photo: {
    borderRadius: 100,
    width: 50,
    height: 50,
    marginEnd: 20,
  },
  title: {
    fontWeight: '700',
    color: 'white',
  },
  backgorundtitle: {
    fontWeight: '500',
    color: 'darkslategray',
  },
  navbar: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  body: {
    flex: 3,
    marginTop:-30,
    paddingHorizontal:16,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius:20,
    alignItems:'center',
    flex: 1,
    elevation: 5,
    margin: 5,
    padding: 10,
  },
  rowtable:{
    // flex: 1,
    marginBottom:10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor: 'darkslategray'
  }
});

export default class Dashboard extends Component {
  render() {
    return (
      // <MainScreens />
      <View style={style.root}>
        <View style={style.header}>
          <View style={style.headtitle}>
            <Image source={reactimg} style={style.photo} />
            <View>
              <Text style={style.title}>Aulia Ramadhan</Text>
              <Text style={style.backgorundtitle}>Fullstack developer</Text>
            </View>
          </View>
          <View>
            <View style={style.navbar}>
              <View style={{alignItems:'center'}}>
                <Icon name="tasks" color='white' size={20} />
                <Text style={style.title}>task</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Icon name="address-book" color='white' size={20} />
                <Text style={style.title}>friends</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Icon name="database" color='white' size={20} />
                <Text style={style.title}>asset</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Icon name="calendar" color='white' size={20} />
                <Text style={style.title}>callender</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Icon name="user" color='white' size={20} />
                <Text style={style.title}>account</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.body}>
            <ScrollView style={{flex:1, marginTop:8}}>
          <View style={{flex:2}}>
          {Array(2)
            .fill(1)
            .map((v, i) => (
              <View style={style.row} key={i}>
                <View style={style.card}>
                  <Icon name='truck' size={45} color='blue' />
                    <Text style={{marginTop:'auto'}} > Bars in hotel </Text>
                    <Text> 42 Place </Text>
                </View>
                <View style={style.card}>
                <Icon name='bus' size={45} color='blue' />
                  <Text style={{marginTop:'auto'}}> Coffe </Text>
                  <Text> 43 lace </Text>
                </View>
              </View>
            ))}
          </View>
          {scroll
            .map((v, i) => (
              <View style={style.rowtable} key={i}>
                <Icon name={v.icon} color='red' size={30} style={{width:40}} />
                  <Text style={{marginLeft:10,marginVertical:'auto', fontSize:16}}> {v.text} </Text>
                  <Icon style={{marginLeft: 'auto', marginRight:10}} name="arrow-right" color='grey' size={20} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const scroll = [
  {icon: 'heart' , text: 'hati'},
  {icon: 'google-wallet' , text: 'dompet'},
  {icon: 'facebook' , text: 'facebook'},
  {icon: 'cart-arrow-down' , text: 'keranjang'},
  {icon: 'money' , text: 'check tabungan'},
]

