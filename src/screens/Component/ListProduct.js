/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, Fragment, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Modal, FlatList, ActivityIndicator } from 'react-native';
import {
  Icon, Text, Row, Button, Badge, List, ListItem, Left, Thumbnail, Body, Right, Card, CardItem, Form, Item, Input
} from 'native-base'
import logo from '../../assets/img/logo.png'
import { getItems } from '../../redux/action/getData';
import { connect } from 'react-redux';
import { postCart } from '../../redux/action/postData';

const style = StyleSheet.create({
  card: {
    borderRadius: 50,
    paddingBottom: 0,
  },
  cardModal: {
    marginTop: 'auto'
    , marginBottom: 'auto',
    borderRadius: 50,
    paddingBottom: 0,
  },
})

const ListProduct = ({ query, dispatch, auth, ...props }) => {
  const [modalVisible, setModalVisible] = useState(false)
  // const [queryfinal, setQuery] = useState(query)
  const [dataModal, setDataModal] = useState({})
  const [qty, setQty] = useState(0)

  // useEffect(() => {
  //   dispatch(getItems(query))
  // }, [query, dispatch])


  const postdata = async () => {
    if (dataModal && !qty) {
      alert('Minimal jumlah barang 1');
      return;
    }
    await dispatch(postCart(auth.token,
      { id_item: dataModal.id, qty: qty, total: qty * dataModal.price }))
    if (props.cart.isError) {
      alert('terdapat error di database')
    } else { setModalVisible(false) }
  }

  return (
    <Fragment>
      {/* <SafeAreaView style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}> */}
      <FlatList
        data={props.items.data.data}
        contentContainerStyle={{ justifyContent: 'space-around' }}
        numColumns={2}
        renderItem={({ item: v }) => (
          <Card style={{ flexBasis: '47%', marginTop: 5 }}>
            <CardItem header bordered style={style.card}>
              <Text>{v.name}</Text>
            </CardItem>
            <CardItem cardBody>
              <Button icon warning transparent style={{ position: 'absolute', top: -20, zIndex: 999 }}
                onPress={() => props.navigation.navigate('DetailProduct', { data: v })}>
                <Icon name='eye' type='FontAwesome' />
              </Button>

              <Button warning icon transparent style={{ position: 'absolute', right: 4, top: -20, zIndex: 999 }}
                onPress={() => {
                  setModalVisible(true);
                  setDataModal(v)
                }}>
                <Icon name='add-circle' />
              </Button>
              <Image source={{
                uri: "http://52.91.248.206:8080".concat(v.image)
              }}
                style={{ height: 120, width: null, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 }} resizeMode='contain' />
            </CardItem>
            <CardItem footer >
              <Left >
                <Icon active name="star" color='gold' style={{ fontSize: 12, color: 'gold' }} />
                <Text style={{ fontSize: 12, color: 'gold' }}> {v.rating.toFixed(2)} </Text>
                <Text style={{ fontSize: 12 }}>IDR {v.price} </Text>
              </Left>
            </CardItem>
          </Card>
        )}
        keyExtractor={item => item.id}
      />
      {/* </SafeAreaView> */}
        {/* <Row style={{ flex: 1, marginTop: 5 }}>
        <Button icon rounded warning 
        >
          <Icon name='arrow-left' type='MaterialCommunityIcons' />
        </Button>
        <Button icon rounded warning style={{ marginLeft: 'auto' }}>
          <Icon name='arrow-right' type='MaterialCommunityIcons' />
        </Button>
      </Row> */}

      {/* ----------MODAL--------------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, marginVertical: 50, backgroundColor: 'rgba(20,20,20,0.1)', justifyContent: 'center' }}>
          {dataModal &&
            <Card style={{ width: '80%', alignSelf: 'center' }}>
              <CardItem header style={{ alignSelf: 'center' }}>
                <Left>
                  <Thumbnail source={logo} />
                  <Body>
                    <Text > {dataModal.name} </Text>
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
                    <Button rounded danger
                      onPress={() => setQty(qty - 1)}>
                      <Icon name="minus" type="MaterialCommunityIcons" />
                    </Button>
                    <Form style={{ marginHorizontal: 16 }}>
                      <Item rounded style={{ width: 60, padding: 0 }}>
                        <Input
                          style={{ textAlign: 'center', height: 'auto' }}
                          value={`${qty}`}
                          numberOfLines={1}
                          disabled
                        />
                      </Item>
                    </Form>
                    <Button rounded danger
                      onPress={() => setQty(qty + 1)}>
                      <Icon name="add" type="MaterialIcons" />
                    </Button>
                  </Row>
                  <Text style={{ alignSelf: 'center', marginVertical: 16, fontSize: 20 }}>IDR {dataModal.price * qty} </Text>
                </Body>
              </CardItem>
              <Button block warning
                onPress={() => postdata()}>
                <Icon name="cart" />
                <Text>Add To Cart</Text>
              </Button>
            </Card>
          }
        </View>
      </Modal>
    </Fragment>
  );

};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    items: state.itemList,
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(ListProduct)

