/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content } from 'native-base';

const style = StyleSheet.create({
  root: {
    flex:1,
    padding: 16,
    justifyContent:'center'
  },
});

export default class Login extends Component {
  render() {
    return (

    <Container>
        <Header>
          <Body>
            <Title>Welcome to Login</Title>
          </Body>
        </Header>
        <Content padder >
          <Form>
            <Item floatingLabel rounded
            style={{marginBottom:20}}>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel rounded last
              style={{marginBottom:20}}>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
  
            <Button rounded block primary style={{ paddingBottom: 4 }}>
              <Text> Login </Text>
            </Button>
            <Button block light primary
            style={{marginBottom:20}}><Text> Sign Up </Text></Button>
          </Form>
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