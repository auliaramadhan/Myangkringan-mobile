import React, {Component, Fragment} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    elevation: 5,
    margin: 5,
    padding: 30,
    flexDirection: 'column',
  },
  text: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection:'row',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default class MainScreens extends Component {
  render() {
    return (
      <Fragment>
        <View style={style.root}>
          {Array(3)
            .fill(1)
            .map((v, i) => (
              <View style={style.row} key={i}>
                <View style={style.card}>
                  <View style={style.Text}>
                    <Text style={style.title}> Bars in hotel </Text>
                    <Text> 42 Place </Text>
                  </View>
                </View>
                <View style={style.card}>
                  <Text style={style.title}> Coffe </Text>
                  <Text> 43 lace </Text>
                </View>
              </View>
            ))}
        </View>
      </Fragment>
    );
  }
}
