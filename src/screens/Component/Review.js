import React from 'react';
import {View, Text} from 'react-native';
import {
  ListItem,
  Left,
  Thumbnail as ThumbnailView,
  Body,
  Button,
  Right,
  Icon,
  Row,
} from 'native-base';
import logo from '../../assets/img/logo.png';

const Review = () => {
  return (
    <ListItem thumbnail>
      <Body>
        <Text>Sankhadeep</Text>
        <Text note numberOfLines={2}>
          Its time to build a difference . .
        </Text>
      </Body>
      <Right>
         <Row>
            <Icon name='star' style={{color:'gold'}} />
            <Icon name='star' style={{color:'gold'}} />
            <Icon name='star' style={{color:'gold'}} />
            <Icon name='star' style={{color:'gold'}} />
         </Row>
      </Right>
    </ListItem>
  );
};

export default Review;
