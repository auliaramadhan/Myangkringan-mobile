/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast } from 'native-base';
import logo from '../assets/img/logo.png'
import { connect } from 'react-redux'
import {getAuth} from '../redux/action/getData'
import { postAuth } from '../redux/action/postData';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  title: {
    marginTop: 'auto',
    alignSelf: 'center', alignItems: 'center',
    borderBottomColor: '#000'
    , marginBottom: 20
    , borderBottomWidth: 0.5
    , width: 150
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

function Login (props) {
  const [input, setInput] = useState({})

  useEffect(() => {
    if (props.auth.token) {
      props.navigation.navigate('Home')
    } 
  }, [])

  const postLogin = async ()=>{
    await props.dispatch(getAuth(input))
    if(props.auth.isSuccess) props.navigation.navigate('Home')
    else if(props.auth.isError) Toast.show({
      text: "Terdapat Error di database",
      buttonText: "Okay",
      duration: 2000
    })
  }
  return (
    <Container >
      <ImageBackground
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDVZ7pR2LOUs8VBrwetNHIo3lYL9xzEtLr2UUtbKu_RGZDBGgH',
        }}
        style={{flex:1,}}>
      <Content padder contentContainerStyle={{ flexGrow: 1, backgroundColor:'fff', opacity:1 }}>
        <View style={style.title}>
          <Image source={logo} style={{ height: 150 }} resizeMode='contain' />
        </View>

        <Form style={{ marginBottom: 'auto' }} >
          <Label style={style.textmiddlePage} >Username</Label>
          <Item rounded block style={{ marginBottom: 20,backgroundColor:'#fff' }} >
            <Input placeholder="Username"
              style={{ textAlign: 'center' }} 
              value={input.username}
              onChangeText={(e)=>setInput({...input,username:e})}
              />
          </Item>
          <Label style={style.textmiddlePage}>Password</Label>
          <Item rounded last style={{ marginBottom: 40, backgroundColor:'#fff' }}>
            <Input secureTextEntry={true} placeholder="Password"
              style={{ textAlign: 'center' }} 
              value={input.password}
              onChangeText={(e)=>setInput({...input,password:e})}
              />
          </Item>

          <Button rounded bordered block
          onPress={() =>postLogin() }
          style={{ paddingBottom: 4, marginHorizontal: 50 }}>
            <Text> Login </Text>
          </Button>
          <Button block primary rounded 
            style={{ marginTop: 20, marginHorizontal: 30 }}><Text> Forgot Password </Text>
          </Button>
        </Form>
        <Button block primary transparent
          onPress={() => props.navigation.navigate('Register')}
          style={{ marginTop: 'auto' }}><Text> Dont have Account? Sign Here </Text>
        </Button>
      </Content>
      </ImageBackground>
    </Container>
  );
}

const mapStateToProps = state => {

  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Login)