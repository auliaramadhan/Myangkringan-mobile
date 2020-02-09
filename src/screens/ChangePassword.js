/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast, Left, Right, Thumbnail, Row, Spinner } from 'native-base';

import { connect } from 'react-redux';
import ReactNativeModal from 'react-native-modal';
import Axios from 'axios';
import { postLogout } from '../redux/action/postData';
import jwt from 'jwt-decode'
import Header from './Component/Header';

const style = StyleSheet.create({
   root: {
      flex: 1,
      padding: 16,
      justifyContent: 'center'
   },
   inputText:{
      marginBottom: 16,  paddingBottom:8, borderColor:'red'
   }
});

function ChangePassword(props) {
   const [input, setInput] = useState({})
   const [modalVisible, setModalVisible] = useState(false)

   async function postChange() {
      if (input.password !== input.confirmPassword) {
         alert('pasword tidak sesuai')
         return;
      }
      const username = jwt(props.auth.token).username
      const res = await Axios({
         method:'put',
         url: `http://52.91.248.206:8080/user/changeuser/${username}`,
         data: input ,
         headers: { 'Authorization': 'Bearer ' + props.auth.token }
      })
      if (res.data.success) {
         alert('sukses')
         await props.dispatch(postLogout(props.auth.token))
         if (props.auth.status.success) {
            props.navigation.navigate('Login')
         } 
      } else alert(res.data.msg)
   }

   return (
      <Container >
         <Header nosearch nofilter name="Change Password" navigation={props.navigation} />
         <Content padder>
            <Form  >
               <Item floatingLabel style={style.inputText}>
                  <Label>Enter Old Password</Label>
                  <Input
                     value={input.oldPassword}
                     selectionColor={'#c00'}
                     secureTextEntry={true}
                     onChangeText={(e) => setInput({ ...input, oldPassword: e })}
                  />
                  <Icon active name='eye' />
               </Item>
               <Item floatingLabel style={style.inputText}>
                  <Label>Password</Label>
                  <Input
                     value={input.password}
                     selectionColor={'#c00'}
                     secureTextEntry={true}
                     onChangeText={(e) => setInput({ ...input, password: e })}
                  />
                  <Icon active name='eye' />
               </Item>
               <Item floatingLabel style={style.inputText}>
                  <Label>Confirm Password</Label>
                  <Input
                     value={input.confirmPassword}
                     selectionColor={'#c00'}
                     secureTextEntry={true}
                     onChangeText={(e) => setInput({ ...input, confirmPassword: e })}
                  />
                  <Icon active name='eye' />
               </Item>

               <Button block rounded danger
                  onPress={postChange}
                  style={{ paddingBottom: 4, marginHorizontal: 8, backgroundColor: 'red' }}>
                  <Text style={{ color: '#fff' }}> Send </Text>
               </Button>
            </Form>
         </Content>
         <ReactNativeModal isVisible={modalVisible}  >
            {props.auth.isLoading && <View style={{}}>
               <Spinner />
            </View>}

            {!(props.auth.isLoading) && <View style={{ backgroundColor: '#eee', padding: 16, }}>
               <Text>Change password instruction has been send to your email</Text>
               <Button style={{ borderRadius: 4, backgroundColor: 'red' }}
                  onPress={() => {setModalVisible(false); props.navigation.goBack()}}>
                  <Text>finish</Text>
               </Button>
            </View>}
         </ReactNativeModal>

      </Container>
   );
}

const mapStateToProps = state => {

   return {
      auth: state.auth
   }
}

export default connect(mapStateToProps)(ChangePassword)
// export default ChangePassword