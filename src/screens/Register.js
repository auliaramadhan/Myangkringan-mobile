/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1 } from 'native-base';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  textmiddlePage: {
    marginLeft: 'auto',
    marginRight: 'auto'
    , paddingBottom: 4
  }
});

export default class Register extends Component {
  render() {
    return (
      <Container>
        <View style={{ padding: 16, flex: 1, alignContent: 'center' }} >
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

            <Button rounded bordered block style={{ paddingBottom: 4,marginHorizontal:50}}>
              <Text> Login </Text>
            </Button>
            <Button block dark transparent
              style={{ marginTop: 20 }}><Text> Forgot Password </Text>
              </Button>
          </Form>
        </View>
            <Button block primary transparent
              style={{ marginTop: 'auto' }}><Text> Dont have Account? Sign Here </Text>
              </Button>
       </Container>
    );
  }
}