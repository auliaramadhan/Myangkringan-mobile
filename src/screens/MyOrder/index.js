/* eslint-disable prettier/prettier */
import React, {Component, useEffect} from 'react';
import {Container, Content, Icon, Accordion, Text, View, Label, Item, Input, Form} from 'native-base';
import Header from '../Component/Header';
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

export default function Order(props) {
  
  
  
  
  
  useEffect(() => {
    //dispatch
  }, [])

  function _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f77a2511',
        }}>
        <Text style={{fontWeight: '600'}}> {item.title}</Text>
        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
      </View>
    );
  }
  function _renderContent(item) {
    return (
      <Form
        style={{
          backgroundColor: '#eee',
          padding: 10,
          fontStyle: 'italic',
        }}>
        
        <Item stackedLabel >
          <Label>name</Label>
          <Input value={item.content} disabled />
        </Item>
      </Form>
    );
  }

  return (
    <Container>
      <Header
        nosearch
        nofilter
        name={'My Order'}
        navigation={props.navigation}
      />
      <Content padder style={{backgroundColor: 'white'}}>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
        />
      </Content>
    </Container>
  );
}
