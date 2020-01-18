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
  title:{
    marginTop:'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textmiddlePage: {
    marginLeft: 'auto',
    marginRight: 'auto'
    , paddingBottom: 4
  }
});

export default function Register(props) {
  
    return (
      <Container >
        <Content padder contentContainerStyle={{flexGrow:1}}>
          <View style={style.title}>
          <Image source={logo} style={{ height: 150 }} resizeMode='contain' />
            <Text style={{fontWeight:'bold', textAlign:'center'}}>
              Register
            </Text>
          </View>

          <Form style={{ marginBottom: 'auto' }} >
            <Label style={style.textmiddlePage} >Username</Label>
            <Item rounded block style={{ marginBottom: 4 }} >
              <Input placeholder="Username" 
                style={{ textAlign: 'center' }} />
            </Item>
            <Label style={style.textmiddlePage} >Email</Label>
            <Item rounded block style={{ marginBottom: 4}} >
              <Input placeholder="Username" 
                style={{ textAlign: 'center' }} />
            </Item>
            <Label style={style.textmiddlePage}>Password</Label>
            <Item rounded last style={{ marginBottom: 4 }}>
              <Input secureTextEntry={true} placeholder="Password"
                style={{ textAlign: 'center' }} />
            </Item>
            <Label style={style.textmiddlePage}>Password</Label>
            <Item rounded last style={{ marginBottom: 4 }}>
              <Input secureTextEntry={true} placeholder="Password"
                style={{ textAlign: 'center' }} />
            </Item>

            <Button rounded bordered block style={{ paddingBottom: 4, marginHorizontal: 50 }}>
              <Text> Register </Text>
            </Button>
          </Form>
        <Button block primary transparent
          onPress={() => props.navigation.goBack()}
          style={{ marginTop: 'auto' }}><Text> Already Register? Login Here </Text>
        </Button>
          </Content>
      </Container>
      
    );
  }
