/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Container, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, DatePicker } from 'native-base';
import logo from '../assets/img/logo.png'
import Header from './Component/Header'

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

function Profile(props) {
  const [isedit, setIsedit] = useState(false)
  const [date, setDate] = useState(0)

  useEffect(() => {
    //dispatch
  }, [])

  const postProfile =() =>{
    //data di post
    setIsedit(false)
  }

  return (
    <Container >
      <Header nosearch nofilter name="Profile" navigation={props.navigation} logout />
      <Content padder contentContainerStyle={{ flexGrow: 1 }}>
        <View style={style.title}>
          <Image source={logo} style={{ height: 150 }} resizeMode='contain' />
        </View>

        <Form style={{ marginBottom: 'auto' }} >
          <Label style={style.textmiddlePage} >First Name</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="First Name" disabled={!isedit}
              style={{ textAlign: 'center' }} />
          </Item>
          <Label style={style.textmiddlePage} >Last Name</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="Last Name" disabled={!isedit}
              style={{ textAlign: 'center' }} />
          </Item>
          <Label style={style.textmiddlePage} >Date Birth</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <DatePicker disabled={!isedit}
              defaultDate={new Date(2018, 4, 4)}
              maximumDate={new Date(2000, 12, 31)}
              locale={"en"}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date of Birth"
              textStyle={{ alignSelf: 'center' }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={setDate}
            />
          </Item>
          <Label style={style.textmiddlePage} >City</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="City" disabled={!isedit}
              style={{ textAlign: 'center' }} />
          </Item>
          <Label style={style.textmiddlePage}>Password</Label>
          <Item rounded last style={{ marginBottom: 40 }}>
            <Input secureTextEntry={true} placeholder="Password"
              style={{ textAlign: 'center' }} />
          </Item>

          <Button rounded success block style={{ paddingBottom: 4, marginHorizontal: 50, display: 'none' }}
          onPress={postProfile} >
            <Text> Save </Text>
          </Button>
          <Button rounded bordered warning block style={{ paddingBottom: 4, marginHorizontal: 50, }}
          onPress={() => setIsedit(true)}>
            <Text> Edit </Text>
          </Button>
        </Form>
      </Content>

    </Container>
  );
}

export default Profile;