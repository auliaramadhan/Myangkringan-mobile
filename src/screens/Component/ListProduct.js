/* eslint-disable prettier/prettier */
import React, { useState, Fragment } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Modal } from 'react-native';
import {
  Icon, Container, Content, Text, Row, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right, Card, CardItem, Form, Item, Input
} from 'native-base'
import logo from '../../assets/img/logo.png'

const style = StyleSheet.create({
  card: {
    borderRadius: 50,
    paddingBottom: 0,
  },
  cardModal: {
    marginTop:'auto'
    , marginBottom:'auto',
    borderRadius: 50,
    paddingBottom: 0,
  },
   name: {

  },
  name12: {

  },
})

const ListProduct = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Fragment>
    <Content >
      {/* style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0, justifyContent:'space-around' }}> */}
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {Array(8).fill(<Card style={{ flexBasis: '48%', marginTop: 5 }}>
          <CardItem header bordered button onPress={() => alert("This is Card Header")} style={style.card}>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem cardBody>
            <Button icon warning transparent style={{ position: 'absolute', top: -10, zIndex: 999 }}
            onPress={() => props.navigation.navigate('DetailProduct')}>
              <Icon name='eye' type='FontAwesome' />
            </Button>
            <Button warning icon transparent style={{ position: 'absolute', right: 4, top: -10, zIndex: 999 }}
              onPress={() => setModalVisible(true)}>
              <Icon name='add-circle' />
            </Button>
            <Image source={logo} style={{ height: 100, width: null, flex: 1 }} resizeMode='contain' />
          </CardItem>
          <CardItem footer >
            <Body>
              <Button transparent>
                <Icon active name="star" />
                <Text>4 Rating</Text>
              </Button>
              <Text>4 Comments</Text>

            </Body>
          </CardItem>
        </Card>)}
      </View>
    </Content>

    {/* ----------MODAL--------------- */}
    <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{flex:1, marginVertical:50, backgroundColor:'rgba(20,20,20,0.1)', justifyContent:'center'}}>
          <Card style={{width:'80%', alignSelf:'center'}}>
          <CardItem header style={{alignSelf:'center'}}>
          <Left>
              <Thumbnail source={logo} />
              <Body>
                <Text >Nama barang</Text>
                <Text note>Add to Cart</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Body>
              <Row
                style={{
                  height: 'auto',
                  alignSelf: 'center',
                }}>
                <Button rounded danger>
                  <Icon name="minus" type="MaterialCommunityIcons" />
                </Button>
                <Form style={{marginHorizontal: 16}}>
                  <Item rounded style={{width: 60, padding: 0}}>
                    <Input
                      style={{textAlign: 'center', height: 'auto'}}
                      numberOfLines={1}
                    />
                  </Item>
                </Form>
                <Button rounded danger>
                  <Icon name="add" type="MaterialIcons" />
                </Button>
              </Row>
              <Text style={{alignSelf:'center', marginVertical:16, fontSize:20}}>IDR 2000</Text>
            </Body>
          </CardItem>
          <Button block warning>
            <Icon name="cart" />
            <Text>Add To Cart</Text>
          </Button>
        </Card>
          </View>
        </Modal>
    </Fragment>
  );
};

export default ListProduct;
