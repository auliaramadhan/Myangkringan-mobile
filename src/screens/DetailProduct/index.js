/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from '../../assets/img/logo.png';
import {
  Container,
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
  Row,
  Right,
  Input,
  ListItem,
} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Review from '../Component/Review';
import {connect} from 'react-redux';
import {getReview} from '../../redux/action/getData';
import { postCart, postReview } from '../../redux/action/postData';

const style = StyleSheet.create({
  card: {
    borderRadius: 50,
    paddingBottom: 0,
  },
});

const DetailProduct = ({dispatch, review, navigation,auth}) => {
  useEffect(() => {
    dispatch(getReview(navigation.state.params.data.id));
    if (review.isError) {
      alert('terdapat error');
    }
  }, [
    review.isError,
    review.status,
    navigation.state.params.data.id,
    dispatch,
  ]);

  const [inputreviews, setInputReviews] = useState({})
   const submitReview = () => {
      dispatch(postReview(auth.token
        ,{...inputreviews, 
        id_item: navigation.state.params.data.id }))
   }

  return (
    <Container>
      <Content padder>
        <CardProdut data={navigation.state.params.data} />

        <Form>
          <Item floatingLabel>
            <Label>Add review</Label>
            <Input multiline={true} numberOfLines={3}
            onChangeText={(e) => setInputReviews({ ...inputreviews, review: e })}/>
          </Item>
          <AirbnbRating
            count={5}
            reviews={['Meh', 'OK', 'Good', 'Very Good', 'Amazing']}
            // showRating={false}
            defaultRating={4}
            isDisabled
            size={20}
            onFinishRating={(value) => setInputReviews({...inputreviews, rating:value})}
          />
        </Form>
        <List>
          <ListItem style={{justifyContent: 'space-between'}}>
            <Button iconLeft bordered rounded warning
            >
              <Icon name="plus" type="MaterialCommunityIcons" />
              <Text>Add review</Text>
            </Button>
            <Button iconLeft bordered rounded success
            onPress={submitReview}>
              <Icon name="plus" type="MaterialCommunityIcons" />
              <Text>Save</Text>
            </Button>
          </ListItem>
          {review.data &&
            review.data.map((v, i) => <Review data={v} key={i} />)}
          <Review />
          <Review />
          <Review />
        </List>
      </Content>
    </Container>
  );
};

function CardProdut({data, cart, auth, dispatch}) {
  const [qty, setQty] = useState(0);

  const postdata = async () => {
    if (!qty) {
      alert('Minimal jumlah barang 1');
      return;
    }
    await dispatch(
      postCart(auth.token, {
        id_item: data.id,
        qty: qty,
        total: qty * data.price,
      }),
    );
    if (cart.isError) {
      alert('terdapat error di database');
    }
  };
  return (
    <Card style={style.card}>
      <CardItem header bordered style={{paddingBottom: 8, paddingTop: 8}}>
        <Left>
          <TB source={{logo}} />
          <Body>
            <Text>{data.name}</Text>
            <Text note>
              <Icon name="star" style={{color: 'gold', fontSize: 16}} /> dad
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Body>
          <Image
            source={{
              uri: 'http://192.168.0.109:8080'.concat(data.image),
            }}
            style={{height: 200, width: 200, alignSelf: 'center'}}
          />
          <Row
            style={{
              height: 'auto',
              scaleX: 0.7,
              scaleY: 0.7,
              alignSelf: 'center',
            }}>
            <Button rounded danger onPress={() => setQty(qty - 1)}>
              <Icon name="minus" type="MaterialCommunityIcons" />
            </Button>
            <Form style={{marginHorizontal: 16}}>
              <Item rounded style={{width: 60, padding: 0}}>
                <Input
                  style={{textAlign: 'center', height: 'auto'}}
                  // numberOfLines={1}
                  value={`${qty}`}
                  disabled
                />
              </Item>
            </Form>
            <Button rounded danger onPress={() => setQty(qty + 1)}>
              <Icon name="add" type="MaterialIcons" />
            </Button>
          </Row>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Body>
          <Text>Category : {data.category} </Text>
          <Text numberOfLines={3} note>
            {data.category}
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
  );
}

const mapStateToProps = state => {
  return {
    review: state.review,
    auth: state.auth,
    cart: state.cart,
  };
};
connect(mapStateToProps)(CardProdut);
export default connect(mapStateToProps)(DetailProduct);
