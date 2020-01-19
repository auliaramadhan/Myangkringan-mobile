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

const Thumbnail = ({navigation, data}) => {
  return (
    <ListItem thumbnail>
      <Left>
        <ThumbnailView square source={{
          uri: "http://localhost:8080" + data.logo
        }} style={{paddingBottom: 5, height:150, width:150}} />
      </Left>
      <Body>
        <Text style={{fontSize:16}}>{data.name}</Text>
        <Text note numberOfLines={2}>
          {/* alamat ln jambu no 19 a kota pare */}
          {data.address}
        </Text>
      </Body>
      <Right>
        <Button transparent onPress={() => 
          navigation.navigate('ByRestaurant',
          {data})}>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default Thumbnail;
