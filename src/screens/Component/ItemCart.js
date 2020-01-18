/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

const Review = () => {
  return (
    <ListItem thumbnail style={{ backgroundColor: '#fff' }}>
      <Thumbnail source={logo} />
      <Body>
        <Text>Nama barang</Text>
        <Row
          style={{
            alignSelf:'flex-end',
            scaleX: 0.7,
            scaleY: 0.7,
          }}>
          <Button rounded danger>
            <Icon name="minus" type="MaterialCommunityIcons" />
          </Button>
          <Form style={{ marginHorizontal: 16 }}>
            <Item rounded style={{ width: 60, padding: 0 }}>
              <Input
                style={{ textAlign: 'center', height: 'auto' }}
                numberOfLines={1}
              />
            </Item>
          </Form>
          <Button rounded danger>
            <Icon name="add" type="MaterialIcons" />
          </Button>
        </Row>
      </Body>
      <Right>
        <Text>IDR</Text>
        <Text>17.000</Text>
      </Right>
    </ListItem>
  );
};

export default Review;
