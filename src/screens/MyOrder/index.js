import React, {Component} from 'react';
import {
  Container,
  
  Content,
  Icon,
  Accordion,
  Text,
  View,
} from 'native-base';
import Header from '../Component/Header'
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

export default class AccordionCustomHeaderContent extends Component {
  _renderHeader(item, expanded) {
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
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: '#eee',
          padding: 10,
          fontStyle: 'italic',
        }}>
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Header nosearch nofilter name={'My Order'} navigation={props.navigation}  />
        <Content padder style={{backgroundColor: 'white'}}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
