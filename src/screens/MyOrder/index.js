/* eslint-disable prettier/prettier */
import React, {Component, useEffect, useState} from 'react';
import {Container, Content, Icon, Accordion, Text, View, Label, Item, Input, Form, Button, Left, ListItem, Body, List, Right} from 'native-base';
import Header from '../Component/Header';
import { getCheckout, getDetailCheckout } from '../../redux/action/getData';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

function Order(props) {
  
  useEffect(() => {
    props.dispatch(getCheckout(props.auth.token))
 }, [props.checkout.status])

 const [modalVisible, setModalVisible] = useState(false)
 const showDetail = async (id) => {
    await props.dispatch(getDetailCheckout(props.auth.token, id))
    setModalVisible(true)
 }
  
  function _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f77a2511',
        }}>
        <Text style={{fontWeight: '600'}}> {item.created_on.split('T')[0]} {item.id} </Text>
        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
      </View>
    );
  }
  function _renderContent(v) {
    return (
      <Form
        style={{
          backgroundColor: '#eee',
          padding: 10,
          fontStyle: 'italic',
        }}>
        
        <Item stackedLabel >
          <Label>name</Label>
          <Input value={`${v.first_name} ${v.last_name}`} disabled />
        </Item>
        <Item stackedLabel >
          <Label>address</Label>
          <Input value={v.address} disabled />
        </Item>
        <Item stackedLabel >
          <Label>Total</Label>
          <Input value={`IDR ${v.total_harga}`} disabled />
        </Item>
        <Button iconLeft warning rounded onPress={()=>showDetail(v.id)} >
          <Icon name='eye' type='FontAwesome' />
          <Text>See Detail</Text>
        </Button>
      </Form>
    );
  }

  return (
    <Container>
      <Header
        nosearch
        nofilter
        name={'My Order'}
        navigation={props.navigation}
      />
      <Content padder style={{backgroundColor: 'white'}}>
        <Accordion
          dataArray={props.checkout.data}
          animation={true}
          expanded={true}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
        />
      </Content>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, marginVertical: 50, backgroundColor: 'rgba(20,20,20,0.1)', justifyContent: 'center' }}>
          <List style={{backgroundColor:'#fff', padding:16}}>
          <ListItem noIndent> 
              <Left style={{flex:2}}>
                  <Text> Item Name </Text>
              </Left>
              <Body style={{flex:1}}>
                  <Text> Qty</Text>
              </Body>
              <Right style={{flex:2}}>
                  <Text>Price</Text>
              </Right>
            </ListItem>
          {props.detailCheckout.data  &&
            props.detailCheckout.data.map((v,i) =>
            <ListItem noIndent>
              <Left style={{flex:2}}>
                  <Text> {v.name} </Text>
              </Left>
              <Body style={{flex:1}}>
                  <Text> {v.qty}X </Text>
              </Body>
              <Right style={{flex:2}}>
                  <Text>IDR {v.total}</Text>
              </Right>
            </ListItem>
            )}
          </List>
        </View>
      </Modal>

    </Container>
  );
}

const mapStateToProps = state => {
  return {
     checkout: state.checkout,
     auth: state.auth,
     detailCheckout: state.detailCheckout
  }
}

export default connect(mapStateToProps)(Order)