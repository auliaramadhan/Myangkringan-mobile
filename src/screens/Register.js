/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast } from 'native-base';
import logo from '../assets/img/logo.png'
import { connect } from 'react-redux';
import { postAuth } from '../redux/action/postData'

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

function Register(props) {
  const [input, setInput] = useState({})

  const postRegister = async()=>{
    if (input.password !== input.repassword) {
      Toast.show({
        text: "password harus sama",
        buttonText: "Okay",
        duration: 2000
      })
      return ;
    }
    await props.dispatch(postAuth(input))
    if(props.auth.isSuccess) {
      Toast.show({
      text: "register berhasil",
      buttonText: "Okay",
      duration: 2000
    })
    props.navigation.goBack();
   }
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
        <Content padder contentContainerStyle={{flexGrow:1}}>
          <View style={style.title}>
          <Image source={logo} style={{ height: 150 }} resizeMode='contain' />
            <Text style={{fontWeight:'bold', textAlign:'center'}}>
              Register
            </Text>
          </View>

          <Form style={{ marginBottom: 'auto' }} >
            <Label style={style.textmiddlePage} >Username</Label>
            <Item rounded block style={{ marginBottom: 4, backgroundColor:'#fff' }} >
              <Input placeholder="Username" 
                style={{ textAlign: 'center' }}
                value={input.username}
              onChangeText={(e)=>setInput({...input,username:e})} />
            </Item>
            <Label style={style.textmiddlePage} >Email</Label>
            <Item rounded block style={{ marginBottom: 4, backgroundColor:'#fff'}} >
              <Input placeholder="Username" 
                style={{ textAlign: 'center' }}
                value={input.email}
              onChangeText={(e)=>setInput({...input,email:e})} />
            </Item>
            <Label style={style.textmiddlePage}>Password</Label>
            <Item rounded last style={{ marginBottom: 4,backgroundColor:'#fff' }}>
              <Input secureTextEntry={true} placeholder="Password"
                style={{ textAlign: 'center' }}
                value={input.password}
              onChangeText={(e)=>setInput({...input,password:e})} />
            </Item>
            <Label style={style.textmiddlePage}>Password again</Label>
            <Item rounded last style={{ marginBottom: 4,backgroundColor:'#fff' }}>
              <Input secureTextEntry={true} placeholder="Password"
                style={{ textAlign: 'center' }}
                value={input.repassword}
              onChangeText={(e)=>setInput({...input,repassword:e})} />
            </Item>

            <Button rounded  block style={{ paddingBottom: 4, marginHorizontal: 50 }}
            onPress={postRegister}>
              <Text> Register </Text>
            </Button>
          </Form>
        <Button block primary transparent
          onPress={() => props.navigation.goBack()}
          style={{ marginTop: 'auto' }}><Text> Already Register? Login Here </Text>
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
  
  export default connect(mapStateToProps)(Register)
