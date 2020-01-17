import React from 'react';
import {View, Text} from 'react-native';
import {
  ListItem,
  Left,
  Thumbnail as ThumbnailView,
  Body,
  Button,
  Right,
} from 'native-base';
import logo from '../../assets/img/logo.png';

const Thumbnail = () => {
  return (
    <ListItem thumbnail>
      <Left>
        <ThumbnailView square source={logo} style={{paddingBottom: 5}} />
      </Left>
      <Body>
        <Text>Sankhadeep</Text>
        <Text note numberOfLines={2}>
          Its time to build a difference . .
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default Thumbnail;
