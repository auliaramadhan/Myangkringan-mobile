import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Form,Label,Item
  Button,
  Icon,
  Left,
  Body,
  Title,
  Row,
  Right,
} from 'native-base';

const DetailProduct = () => {
  return (
    <Container>
      <Card style={{flex: 1}}>
        {/* <Card style={{flex: 0}}> */}
        <CardItem header>
          <Left>
            <Thumbnail source={{uri: 'Image URL'}} />
            <Body>
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{uri: 'Image URL'}}
              style={{height: 200, width: 200, flex: 1}}
            />
            <Title>NAMA BARANG</Title>
            <Text> </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Body>
            <Button rounded danger>
              <Icon name="add" />
            </Button>
            <Form>
              <Item rounded block style={{marginBottom: 20}}>
                <Input  style={{textAlign: 'center'}} />
              </Item>
            </Form>
            <Button rounded danger>
              <Icon name="minus" />
            </Button>
          </Body>
          <Right>
            <Button full textStyle={{color: '#87838B'}}>
              <Icon name="cart" />
              <Text>Add To Cart</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Container>
  );
};

export default DetailProduct;
