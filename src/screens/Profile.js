/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, DatePicker } from 'native-base';
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

function Profile(props) {
      const [date, setDate] = useState(0)   
    return (
      <Container >
        <Content padder contentContainerStyle={{flexGrow:1}}>
          <View style={style.title}>
            <Image source={logo} style={{ height: 150 }} resizeMode='contain' />
          </View>

          <Form style={{ marginBottom: 'auto' }} >
            <Label style={style.textmiddlePage} >First Name</Label>
            <Item rounded block style={{ marginBottom: 20 }} >
              <Input placeholder="First Name" disabled={true}
                style={{ textAlign: 'center' }} />
            </Item>
            <Label style={style.textmiddlePage} >Last Name</Label>
            <Item rounded block style={{ marginBottom: 20 }} >
              <Input placeholder="Last Name" disabled={true}
                style={{ textAlign: 'center' }} />
            </Item>
            <Label style={style.textmiddlePage} >Date Birth</Label>
            <Item rounded block style={{ marginBottom: 20 }} >
                <DatePicker disabled={true}
            defaultDate={new Date(2018, 4, 4)}
            maximumDate={new Date(2000, 12, 31)}
            locale={"en"}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date of Birth"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={setDate}
            />
              </Item>
            <Item rounded block style={{ marginBottom: 20 }} >
              <Input placeholder="Date" value={date.toString().substr(4, 12)}
                style={{ textAlign: 'center' }} disabled />
            </Item>
            <Label style={style.textmiddlePage} >City</Label>
            <Item rounded block style={{ marginBottom: 20 }} >
              <Input placeholder="City" disabled={true}
                style={{ textAlign: 'center' }}  />
            </Item>
            <Label style={style.textmiddlePage}>Password</Label>
            <Item rounded last style={{ marginBottom: 40 }}>
              <Input secureTextEntry={true} placeholder="Password" 
                style={{ textAlign: 'center' }} />
            </Item>

            <Button rounded success block style={{ paddingBottom: 4, marginHorizontal: 50, display:'flex' }}>
              <Text> Save </Text>
            </Button>
            <Button rounded bordered warning block style={{ paddingBottom: 4, marginHorizontal: 50, display:'none' }}>
              <Text> Edit </Text>
            </Button>
          </Form>
        </Content>
        
      </Container>
    );
}

export default Profile;