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

const Thumbnail = ({navigation}) => {
  return (
    <ListItem thumbnail>
      <Left>
        <ThumbnailView square source={logo} style={{paddingBottom: 5}} />
      </Left>
      <Body>
        <Text style={{fontSize:16}}>Sankhadeep</Text>
        <Text note numberOfLines={2}>
          alamat ln jambu no 19 a kota pare
        </Text>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.navigate('ByRestaurant')}>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default Thumbnail;
