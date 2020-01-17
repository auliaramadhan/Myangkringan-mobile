import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from '../assets/img/logo.png';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail as TB,
  Text,
  List,
  Form,
  Label,
  Item,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Row,
  Right,
  Input,
  Tabs,
  Tab,
  TabHeading,
  ListItem,
  Textarea,
} from 'native-base';
import Thumbnail from './Component/Thumbnail';
import Review from './Component/Review';

const style = StyleSheet.create({
  card: {
    borderRadius: 50,
    paddingBottom: 0,
  },
  name12: {},
});

const DetailProduct = () => {
  return (
    <Container>
      <Content padder>
        <Card style={style.card}>
          {/* <Card style={{flex: 0}}> */}
          <CardItem header bordered style={{paddingBottom: 8, paddingTop: 8}}>
            <Left>
              <TB source={logo} />
              <Body>
                <Text>Nama Product</Text>
                <Text note>
                  <Icon name="star" style={{color: 'gold', fontSize: 16}} /> dad
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Body>
              <Image
                source={logo}
                style={{height: 200, width: 200, alignSelf: 'center'}}
              />
              <Row
                style={{
                  height: 'auto',
                  scaleX: 0.7,
                  scaleY: 0.7,
                  alignSelf: 'center',
                }}>
                <Button rounded danger>
                  <Icon name="minus" type="MaterialCommunityIcons" />
                </Button>
                <Form style={{marginHorizontal: 16}}>
                  <Item rounded style={{width: 60, padding: 0}}>
                    <Input
                      style={{textAlign: 'center', height: 'auto'}}
                      numberOfLines={1}
                    />
                  </Item>
                </Form>
                <Button rounded danger>
                  <Icon name="add" type="MaterialIcons" />
                </Button>
              </Row>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Body>
              <Text>Category : ha</Text>
              <Text numberOfLines={3} note>
                asddadasdsadassd
              </Text>
            </Body>
          </CardItem>
          <Button
            block
            warning
            style={{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
            <Icon name="cart" />
            <Text>Add To Cart</Text>
          </Button>
        </Card>

        <Item rounded>
          <Textarea value={'aaa'} placeholder="Rounded Textbox" style={{height: 10,}} />
        </Item>
        <List>
          <ListItem>
            <Button iconLeft bordered rounded warning>
              <Icon name="plus" type="MaterialCommunityIcons" />
              <Text>Add review</Text>
            </Button>
          </ListItem>
          <Review />
          <Review />
          <Review />
          <Review />
        </List>
      </Content>
    </Container>
  );
};

export default DetailProduct;
