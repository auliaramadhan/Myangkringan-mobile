/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { Button, Container, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, DatePicker } from 'native-base';
import logo from '../assets/img/logo.png'
import Header from './Component/Header'
import { connect } from 'react-redux';
import { getProfile } from '../redux/action/getData';
import { postProfile } from '../redux/action/postData';
import ImagePicker from 'react-native-image-picker'


function Profile(props) {
  const [inputs, setInputs] = useState(props.profile.data)
  const [isedit, setIsedit] = useState(false)

  useEffect(() => {
    props.dispatch(getProfile(props.auth.token))
  }, [ ])
  useEffect(() => {
    setInputs(props.profile.data)
  }, [props.profile.data])

  const postProfileInput = async () => {
    if (!inputs.date_of_birth) {
      alert('please input date')
      return;
    }
    const input = { ...inputs }
    // input.date_of_birth = inputs.date_of_birth.toISOString().split('T')[0]
    await props.dispatch(postProfile(props.auth.token, input))
    props.dispatch(getProfile(props.auth.token))
    if (props.profile.status.success) {
      setIsedit(false)
      // props.dispatch(getProfile(props.auth.token))
    } else if (props.profile.status.isError) alert('ada masalah di database')
  }

  function selectPhotoTapped() {
    const options = {
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('User cancelled photo picker');
      } else if (response.error) {
        alert('ImagePicker Error: ', response.error);
      } else {
        const data = new FormData();

        data.append("image", {
          name: response.fileName,
          type: response.type,
          uri:
            Platform.OS === "android" ? response.uri : response.uri.replace("file://", "")
        });
        fetch(`http://52.91.248.206:8080/profile/changeavatar`, {
        method: 'PATCH',
        body: data,
        headers: { 'Authorization': 'Bearer ' + props.auth.token }
      })
          .then(response => response.json())
          .then(response => {
            console.log("upload succes", response);
            alert("Upload success!");
            props.dispatch(getProfile(props.auth.token))
          })
          .catch(error => {
            console.log("upload error", error);
            alert("Upload failed!");
          });

      }
    });
  }

  return (
    <Container >
      <Header nosearch nofilter name="Profile" navigation={props.navigation} logout />
      <Content padder contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          style={{height: 128, width: 128, alignSelf: 'center', marginTop: 20}}
          borderRadius={64}
          source={{uri: 'http://52.91.248.206:8080/' + inputs.avatar}}
        />
        <TouchableOpacity
          style={style.picture}
          onPress={selectPhotoTapped}>
          <Icon name="camera" style={{height:24, color:'#dd0'}} />
        </TouchableOpacity>
        {/* <View style={style.title}>
          <Image source={logo} style={{ height: 150 }} resizeMode='contain' />
        </View> */}

        <Form style={{ marginBottom: 'auto' }} >
          <Label style={style.textmiddlePage} >First Name</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="First Name" disabled={!isedit}
              style={{ textAlign: 'center' }}
              value={inputs.first_name}
              onChangeText={(e) => setInputs({ ...inputs, first_name: e })}
            />
          </Item>
          <Label style={style.textmiddlePage} >Last Name</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="Last Name" disabled={!isedit}
              style={{ textAlign: 'center' }}
              value={inputs.last_name}
              onChangeText={(e) => setInputs({ ...inputs, last_name: e })}
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
              onDateChange={(e) => setInputs({ ...inputs, date_of_birth: e })}
            />
          </Item>
          <Label style={style.textmiddlePage} >Address</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="Address" disabled={!isedit}
              style={{ textAlign: 'center' }}
              value={inputs.address}
              onChangeText={(e) => setInputs({ ...inputs, address: e })}
            />
          </Item>
          <Label style={style.textmiddlePage} >ZIP Code</Label>
          <Item rounded block style={{ marginBottom: 20 }} >
            <Input placeholder="Zip code" disabled={!isedit}
              style={{ textAlign: 'center' }}
              value={inputs.zip_code}
              onChangeText={(e) => setInputs({ ...inputs, zip_code: e })}
            />
          </Item>
          <Label style={style.textmiddlePage}>City</Label>
          <Item rounded last style={{ marginBottom: 40 }}>
            <Input placeholder="City" disabled={!isedit}
              value={inputs.city_of_birth}
              onChangeText={(e) => setInputs({ ...inputs, city_of_birth: e })}
              style={{ textAlign: 'center' }} />
          </Item>

            <Item rounded icon last style={{ marginBottom: 40 }}  >
              <Input placeholder="Password" disabled
                style={{ textAlign: 'center' }} />
            <Button transparent onPress={() => props.navigation.navigate('ChangePassword')}>
              <Icon name='edit' type='FontAwesome' />
          </Button>
            </Item>

          {isedit && <Button rounded success block style={{ paddingBottom: 4, marginHorizontal: 50 }}
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
  }, picture: { width: 80, height: 80, alignSelf: 'center', marginTop:-30,  },
});
