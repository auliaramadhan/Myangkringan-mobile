/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Container, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, DatePicker } from 'native-base';
import logo from '../assets/img/logo.png'
import Header from './Component/Header'
import { connect } from 'react-redux';
import { getProfile } from '../redux/action/getData';
import { postProfile } from '../redux/action/postData';

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
  const [inputs, setInputs] = useState(props.profile.data)
  const [isedit, setIsedit] = useState(false)

  const postProfileInput = async() =>{
    if (!inputs.date_of_birth) {
      alert('please input date')
      return;
    }
    const input = {...inputs}
    input.date_of_birth= inputs.date_of_birth.toISOString().split('T')[0]
    await props.dispatch(postProfile(props.auth.token, input))
    if(props.profile.status.success) {
      setIsedit(false)
      props.dispatch(getProfile(props.auth.token))
    }else if(props.profile.status.isError) alert('ada masalah di database')
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
              style={{ textAlign: 'center' }}
              value={inputs.first_name}
              onChangeText={(e) => setInputs({...inputs, first_name:e }) }
              />
          </Item>
          <Label style={style.textmiddlePage} >Last Name</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="Last Name" disabled={!isedit}
              style={{ textAlign: 'center' }} 
              value={inputs.last_name}
              onChangeText={(e) => setInputs({...inputs, last_name:e }) }
              />
          </Item>
          <Label style={style.textmiddlePage} >Date Birth</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <DatePicker disabled={!isedit}
              defaultDate={new Date(inputs.date_of_birth)}
              maximumDate={new Date(2000, 12, 31)}
              locale={"en"}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date of Birth"
              textStyle={{ alignSelf: 'center' }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={(e) => setInputs({...inputs, date_of_birth:e })}
            />
          </Item>
          <Label style={style.textmiddlePage} >Address</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="Address" disabled={!isedit}
              style={{ textAlign: 'center' }}
              value={inputs.address}
              onChangeText={(e) => setInputs({...inputs, address:e }) }
              />
          </Item>
          <Label style={style.textmiddlePage} >ZIP Code</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="Zip code" disabled={!isedit}
              style={{ textAlign: 'center' }}
              value={inputs.zip_code}
              onChangeText={(e) => setInputs({...inputs, zip_code:e }) }
              />
          </Item>
          <Label style={style.textmiddlePage}>City</Label>
          <Item rounded last style={{ marginBottom: 40 }}>
            <Input placeholder="City" disabled={!isedit}
            value={inputs.city_of_birth}
            onChangeText={(e) => setInputs({...inputs, city_of_birth: e }) }
              style={{ textAlign: 'center' }} />
          </Item>
          
          <Button transparent onPress={()=>props.navigation.navigate('ChangePassword')}>
          <Item rounded icon last style={{ marginBottom: 40 }}  >
            <Input placeholder="Password" disabled
              style={{ textAlign: 'center' }} />
            <Icon name='edit' type='FontAwesome'  />
          </Item>
              </Button>

          {isedit &&  <Button rounded success block style={{ paddingBottom: 4, marginHorizontal: 50 }}
          onPress={() => postProfileInput()} disabled={props.profile.isLoading} >
            <Text> Save </Text>
          </Button>}
          {!isedit && <Button rounded bordered warning block style={{ paddingBottom: 4, marginHorizontal: 50, }}
          onPress={() => setIsedit(true)}>
            <Text> Edit </Text>
          </Button>}
        </Form>
      </Content>

    </Container>
  );
}

const mapStateToProps = state => {
  return {
     auth: state.auth,
     profile: state.profile,
  }
}

export default connect(mapStateToProps)(Profile)
