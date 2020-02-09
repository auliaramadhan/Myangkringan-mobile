/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Right,
  Icon,
  Row,
  Form,
  Item,
  Input,
} from 'native-base';
import logo from '../../assets/img/logo.png';
import { putCart } from '../../redux/action/deletePutData';
import { connect } from 'react-redux';

const ItemCart = (props) => {
  // const [qty, setQty] = useState(props.data.qty)

  const putFromCart = async (qty) => {
    await props.dispatch(putCart(props.auth.token, props.data.id, qty, qty*props.data.price))
    if (props.cart.isError) alert('ada msalah di database')
    //    alert('data berhasil diubah')
    // } else {
    //    alert('terdapat error pada database')
    // }
 }
  return (
    <ListItem thumbnail style={{ backgroundColor: '#fff', marginVertical:5,padding:4 }}>
      <Thumbnail
        source={{
          uri: 'http://52.91.248.206:8080'.concat(props.data.image),
      }} />
      <Body>
        <Text>{props.data.name}</Text>
        <Row
          style={{
            alignSelf:'flex-end',
            scaleX: 0.7,
            scaleY: 0.7,
          }}>
          <Button rounded danger
          disabled={props.cart.isLoading}
          onPress={()=> putFromCart(props.data.qty-1)}>
            <Icon name="minus" type="MaterialCommunityIcons" />
          </Button>
          <Form style={{ marginHorizontal: 16 }}>
            <Item rounded style={{ width: 60, padding: 0 }}>
              <Input
                style={{ textAlign: 'center', height: 'auto' }}
                numberOfLines={1}
                value={`${props.data.qty}`}
              />
            </Item>
          </Form>
          <Button rounded danger
          disabled={props.cart.isLoading}
          onPress={()=> putFromCart(props.data.qty+1)} >
            <Icon name="add" type="MaterialIcons" />
          </Button>
        </Row>
      </Body>
      <Right>
        <Text>Total</Text>
        <Text>IDR</Text>
        <Text>{(props.data.total || 0)}</Text>
      </Right>
    </ListItem>
  );
};

const mapStateToProps = state => {
  return {
     auth: state.auth,
      cart: state.cart
  }
}

export default connect(mapStateToProps)(ItemCart)