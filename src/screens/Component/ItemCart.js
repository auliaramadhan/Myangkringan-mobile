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

const Review = (props) => {
  const [qty, setQty] = useState(props.data.qty)
  return (
    <ListItem thumbnail style={{ backgroundColor: '#fff' }}>
      <Thumbnail
        source={{
          uri: 'http://localhost:8080'.concat(props.data.image),
      }} />
      <Body>
        <Text>{props.data.name}</Text>
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
        <Text>Total</Text>
        <Text>IDR</Text>
        <Text>{(props.data.total || 0)}</Text>
      </Right>
    </ListItem>
  );
};

export default Review;
