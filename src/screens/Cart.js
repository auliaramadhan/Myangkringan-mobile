// /* eslint-disable prettier/prettier */
// import React, { Component } from 'react';
// import {
//     Animated,
//     Dimensions,
//     Image,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     TouchableHighlight,
//     View,
// } from 'react-native';
// import Item from './Component/ItemCart'

// import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
// import { Button } from 'native-base';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listType: 'FlatList',
//             listViewData: Array(20)
//                 .fill('')
//                 .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
//             sectionListData: Array(5)
//                 .fill('')
//                 .map((_, i) => ({
//                     title: `title${i + 1}`,
//                     data: [
//                         ...Array(5)
//                             .fill('')
//                             .map((_, j) => ({
//                                 key: `${i}.${j}`,
//                                 text: `item #${j}`,
//                             })),
//                     ],
//                 })),
//         };

//         this.rowSwipeAnimatedValues = {};
//         Array(20)
//             .fill('')
//             .forEach((_, i) => {
//                 this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
//             });
//     }

//     closeRow(rowMap, rowKey) {
//         if (rowMap[rowKey]) {
//             rowMap[rowKey].closeRow();
//         }
//     }

//     deleteRow(rowMap, rowKey) {
//         this.closeRow(rowMap, rowKey);
//         const newData = [...this.state.listViewData];
//         const prevIndex = this.state.listViewData.findIndex(
//             item => item.key === rowKey
//         );
//         newData.splice(prevIndex, 1);
//         this.setState({ listViewData: newData });
//     }

//     deleteSectionRow(rowMap, rowKey) {
//         this.closeRow(rowMap, rowKey);
//         const [section] = rowKey.split('.');
//         const newData = [...this.state.sectionListData];
//         const prevIndex = this.state.sectionListData[section].data.findIndex(
//             item => item.key === rowKey
//         );
//         newData[section].data.splice(prevIndex, 1);
//         this.setState({ sectionListData: newData });
//     }

//     onRowDidOpen = rowKey => {
//         console.log('This row opened', rowKey);
//     };

//     onSwipeValueChange = swipeData => {
//         const { key, value } = swipeData;
//         this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
//     };

//     render() {
//         return (
//             <View style={styles.container}>

//                 {this.state.listType === 'FlatList' && (
//                     <SwipeListView
//                         data={this.state.listViewData}
//                         renderItem={data => (
//                                    <Item />
//                         )}
//                         renderHiddenItem={(data, rowMap) => (
//                             <View style={styles.rowBack}>
//                                 <Text>Left</Text>
//                                 <Button full
//                                     onPress={() =>
//                                         this.closeRow(rowMap, data.item.key)
//                                     }
//                                 >
//                                     <Text style={styles.backTextWhite}>
//                                         Close
//                                     </Text>
//                                 </Button>
//                                 <Button full
//                                     onPress={() =>
//                                         this.deleteRow(rowMap, data.item.key)
//                                     }>
//                                         <Image
//                                             source={require('../assets/img/logo.png')}
//                                             style={styles.trash}
//                                         />
//                                 </Button>
//                             </View>
//                         )}
//                         leftOpenValue={75}
//                         rightOpenValue={-150}
//                         previewRowKey={'0'}
//                         previewOpenValue={-40}
//                         previewOpenDelay={3000}
//                         onRowDidOpen={this.onRowDidOpen}
//                         onSwipeValueChange={this.onSwipeValueChange}
//                     />
//                 )}
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'white',
//         flex: 1,
//     },
//     standalone: {
//         marginTop: 30,
//         marginBottom: 30,
//     },
//     standaloneRowFront: {
//         alignItems: 'center',
//         backgroundColor: '#CCC',
//         justifyContent: 'center',
//         height: 50,
//     },
//     standaloneRowBack: {
//         alignItems: 'center',
//         backgroundColor: '#8BC645',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 15,
//     },
//     backTextWhite: {
//         color: '#FFF',
//     },
//     rowFront: {
//         alignItems: 'center',
//         backgroundColor: '#CCC',
//         borderBottomColor: 'black',
//         borderBottomWidth: 1,
//         justifyContent: 'center',
//         height: 50,
//     },
//     rowBack: {
//         alignItems: 'center',
//         backgroundColor: '#DDD',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingLeft: 15,
//     },
//     backRightBtn: {
//         alignItems: 'center',
//         bottom: 0,
//         justifyContent: 'center',
//         position: 'absolute',
//         top: 0,
//         width: 75,
//     },
//     backRightBtnLeft: {
//         backgroundColor: 'blue',
//         right: 75,
//     },
//     backRightBtnRight: {
//         backgroundColor: 'red',
//         right: 0,
//     },
//     controls: {
//         alignItems: 'center',
//         marginBottom: 30,
//     },
//     switchContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginBottom: 5,
//     },
//     switch: {
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: 'black',
//         paddingVertical: 10,
//         width: Dimensions.get('window').width / 4,
//     },
//     trash: {
//         height: 25,
//         width: 25,
//     },
// });




/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Button, Badge, List, ListItem, Left, Body, Right, Toast
} from 'native-base'
import Item from './Component/ItemCart'
import logo from '../assets/img/logo.png'
import { SwipeRow } from 'react-native-swipe-list-view';


const style = StyleSheet.create({
   standaloneRowBack: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
   },
})

const Cart = () => {
   
   useEffect(() => {
      Toast.show({
         text: "swipe left to delete",
         buttonText: "Okay",
         duration: 2000
       })
       //dispatch
   }, [])

   return (
      <Container>
         <Content padder>
            <Item />
            <Item />
            <Item />
            <SwipeRow rightOpenValue={-75}>
               <View style={style.standaloneRowBack} >
                  <View></View>
                  <View style={{height:'auto'}}>
                  <Button icon danger style={{height:'100%', padding:0}}>
                     <Icon name='trash' type='FontAwesome' />
                  </Button>
                  </View>
               </View>
            <Item />
            </SwipeRow>

            <Button iconLeft block rounded success>
               <Icon name='check' type='MaterialIcons' />
               <Text>Checkout</Text>
            </Button>
         </Content>
      </Container>
   );
};

export default Cart;
