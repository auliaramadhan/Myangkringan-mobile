/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1 } from 'native-base';
import logo from '../assets/img/logo.png'

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  title: { 
    marginTop: 'auto',
    alignSelf:'center', alignItems: 'center',
    borderBottomColor:'#000'
    , marginBottom:20
    , borderBottomWidth:0.5
    ,width:150
  },
  textTitle: {
    marginLeft: 'auto',
    marginRight: 'auto'
    , borderBottomColor: '#000'
    , borderBottomWidth: 0.5
  },
  textmiddlePage: {
    marginLeft: 'auto',
    marginRight: 'auto'
    , paddingBottom: 4
  }
});

export default class Login extends Component {
  render() {
    return (
      <Container  >
        <Content padder contentContainerStyle={{flexGrow:1}}>
          <View style={style.title}>
            <Image source={logo} style={{ height: 150 }} resizeMode='contain' />
          </View>

          <Form style={{ marginBottom: 'auto' }} >
            <Label style={style.textmiddlePage} >Username</Label>
            <Item rounded block style={{ marginBottom: 20 }} >
              <Input placeholder="Username" 
                style={{ textAlign: 'center' }} />
            </Item>
            <Label style={style.textmiddlePage}>Password</Label>
            <Item rounded last style={{ marginBottom: 40 }}>
              <Input secureTextEntry={true} placeholder="Password"
                style={{ textAlign: 'center' }} />
            </Item>

            <Button rounded bordered block style={{ paddingBottom: 4, marginHorizontal: 50 }}>
              <Text> Login </Text>
            </Button>
            <Button block dark transparent
              style={{ marginTop: 20 }}><Text> Forgot Password </Text>
            </Button>
          </Form>
        <Button block primary transparent
          style={{ marginTop: 'auto' }}><Text> Dont have Account? Sign Here </Text>
        </Button>
          </Content>
      </Container>
    );
  }
}
      // <ImageBackground>

      // </ImageBackground>

      // <View style={style.root}>
      //   <Text style={style.titleText}>React Demo App</Text>
      //   <TextInput style={style.input} placeholder='Username' />
      //   <TextInput style={style.input} placeholder='Password' />
      //   <Button titleText='ad' />
      // </View>