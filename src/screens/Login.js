/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'native-base';

const style = StyleSheet.create({
  root: {
    flex:1,
    padding: 16,
    justifyContent:'center'
  },
  titleText:{
    fontWeight: 'bold'
    , fontSize: 25
    , marginBottom: 50
    , marginLeft: 'auto'
    , marginRight: 'auto'
  },
  input:{
    borderWidth:1
    , borderRadius: 8
    , paddingLeft: 20
    , fontSize: 17
    , marginBottom: 20
  },
  formItem: {
    marginVertical: 15
  }

});

export default class Login extends Component {
  render() {
    return (
      <View style={style.root}>
        <Text style={style.titleText}>React Demo App</Text>
        <TextInput style={style.input} placeholder='Username' />
        <TextInput style={style.input} placeholder='Password' />
        <Button titleText='ad' />
      </View>
    );
  }
}
