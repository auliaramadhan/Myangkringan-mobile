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
import { AirbnbRating } from 'react-native-ratings';

const Review = ({data}) => {
  return (
    <ListItem thumbnail>
      <Body>
        <Text> {`${data.first_name} ${data.last_name}`} </Text>
        <Text note numberOfLines={2}>
          {data.review}
        </Text>
      </Body>
      <Right>
      <AirbnbRating
            count={5}
            defaultRating={Math.round(data.rating)}
            isDisabled
            size={12}/>
      </Right>
    </ListItem>
  );
};

export default Review;
