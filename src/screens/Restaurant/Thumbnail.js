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
        <ThumbnailView square source={{
          uri: "http://52.91.248.206:8080" + data.logo
        }} />
      <Body>
        <Text style={{fontSize:16}}>{data.name}</Text>
        <Text note numberOfLines={2} style={{color:'grey'}}>
          {/* alamat ln jambu no 19 a kota pare */}
          {data.description}
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
